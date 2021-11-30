# mtopara-portal

This repository contains the help pages of https://meteo-parapente.com. They are written in markdown and processed by https://www.mkdocs.org.

## Contributing

We are happy accepting your changes and improvements to these pages. There are two ways:

 * **simply send us your improvements by email (support@meteo-parapente.com) in a format that is meaningful for you. For example a .doc file. We will then take care to include them.**

 * or use the standard GitHub workflow to fork this repo, make your changes locally and
   issue a pull request.

## How to see local changes

Here we describe, how you can setup a local copy of the documentation to see, what you change.
To do so, you need a Linux box with mkdocs installed.

Clone the repository from GitHub:
```
git clone https://github.com/meteo-parapente/mtopara-portal.git
cd mtopara-portal
```

Install Mkdocs:
```
pip3 install -r requirements.txt
```

Start a local MkDocs server to see the changes:
```
mkdocs serve
```

Finally use a web browser going to http://localhost:8000/ to see the changes.


## A note about translations

We use MkDocs static i18n plugin to manage translations.

The documentation is available here: <https://github.com/ultrabug/mkdocs-static-i18n>

### Building only the default language for faster development

When working on your project, building a version for each supported language
can be slow depending on the size of your documentation.

The `default_language_only` option allows you to only build the selected
`default_language` of your documentation for faster development.

Coupled with [MkDocs >= 1.2 support for environment variables](https://www.mkdocs.org/about/release-notes/#support-added-for-environment-variables-in-the-configuration-file-1954),
this option can easily be passed dynamically [within your `mkdocs.yml` file like this](https://github.com/ultrabug/mkdocs-static-i18n/blob/main/mkdocs.yml)!




