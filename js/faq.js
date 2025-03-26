        document.addEventListener('DOMContentLoaded', function() {
            function wrapContentInDivs() {
                const article = document.querySelector('.md-content__inner');
                const elements = Array.from(article.children);
                
                // First wrap H1 sections
                let currentH1Wrapper = null;
                let isFirstH1 = true;
                
                elements.forEach((el) => {
                    if (el.tagName === 'H1') {
                        if (isFirstH1) {
                            isFirstH1 = false;
                            return;
                        }
                        currentH1Wrapper = document.createElement('div');
                        currentH1Wrapper.className = 'h1-content';
                        el.after(currentH1Wrapper);
                    } else if (currentH1Wrapper) {
                        currentH1Wrapper.appendChild(el);
                    }
                });
                
                // Then wrap H2 sections
                document.querySelectorAll('.h1-content, .md-content__inner').forEach(container => {
                    const elements = Array.from(container.children);
                    let currentH2Wrapper = null;
                    
                    elements.forEach(el => {
                        if (el.tagName === 'H2') {
                            currentH2Wrapper = document.createElement('div');
                            currentH2Wrapper.className = 'h2-content';
                            el.after(currentH2Wrapper);
                        } else if (currentH2Wrapper && !el.classList.contains('h1-content')) {
                            currentH2Wrapper.appendChild(el);
                        }
                    });
                });
                
                // Finally wrap H3 sections
                document.querySelectorAll('.h2-content').forEach(h2Wrapper => {
                    const elements = Array.from(h2Wrapper.children);scroll
                    let currentH3Wrapper = null;
                    
                    elements.forEach(el => {
                        if (el.tagName === 'H3') {
                            currentH3Wrapper = document.createElement('div');
                            currentH3Wrapper.className = 'h3-content';
                            el.after(currentH3Wrapper);
                        } else if (currentH3Wrapper) {
                            currentH3Wrapper.appendChild(el);
                        }
                    });
                });
            }

            function scrollToHeader(element) {
                if (!element) return;
                
                setTimeout(() => {
                    const offset = element.getBoundingClientRect().top + window.pageYOffset - 60;
                    window.scrollTo({
                        top: offset,
                        behavior: 'auto'
                    });
                }, 0);
            }

            // Initialize wrappers
            wrapContentInDivs();

            // Click handler for h1 (except first)
            document.querySelectorAll('h1:not(:first-of-type)').forEach(h1 => {
                h1.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const wasActive = this.classList.contains('active');
                    const h1Content = this.nextElementSibling;
                    
                    // Close all H1 sections
                    document.querySelectorAll('.h1-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    document.querySelectorAll('h1:not(:first-of-type)').forEach(h => {
                        h.classList.remove('active');
                    });
                    
                    if (!wasActive) {
                        this.classList.add('active');
                        h1Content.classList.add('active');
                        //scrollToHeader(this);
                    }
                });
            });

            // Click handler for h2
            document.querySelectorAll('h2').forEach(h2 => {
                h2.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const wasActive = this.classList.contains('active');
                    const h2Content = this.nextElementSibling;
                    
                    // Close all H2 sections at this level
                    const parent = this.closest('.h1-content') || this.closest('.md-content__inner');
                    parent.querySelectorAll('.h2-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    parent.querySelectorAll('h2').forEach(h => {
                        h.classList.remove('active');
                    });
                    
                    if (!wasActive) {
                        this.classList.add('active');
                        h2Content.classList.add('active');
                        //scrollToHeader(this);
                    }
                });
            });

            // Click handler for h3
            document.querySelectorAll('h3').forEach(h3 => {
                h3.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const h2Content = this.closest('.h2-content');
                    if (h2Content.classList.contains('active')) {
                        const wasActive = this.classList.contains('active');
                        const h3Content = this.nextElementSibling;
                        
                        // Close all H3 sections in this H2
                        h2Content.querySelectorAll('.h3-content').forEach(content => {
                            content.classList.remove('active');
                        });
                        h2Content.querySelectorAll('h3').forEach(h => {
                            h.classList.remove('active');
                        });
                        
                        if (!wasActive) {
                            this.classList.add('active');
                            h3Content.classList.add('active');
                            scrollToHeader(this);
                        }
                    }
                });
            });

            setTimeout(() => document.querySelector('.md-content__inner').classList.add('loaded'), 1000);
        });
