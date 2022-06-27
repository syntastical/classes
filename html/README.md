# HTML For Web Design

# Introduction
HTML(Hyper Text Markup Langauge) is the lifeblood of all websites. It defines the structure and content of the site, while other things define how the content looks (CSS) and functions (Javascript).

# Daily Setup
1. Press the Windows key and type `pycharm` then press `enter`.

## What does HTML look like

```html
<html>
    <head>
        <title>My Page Title</title>
    </head>
    <body>
        <p>
            paragraph text #1
        </p>
        <p>
            paragraph text #2
        </p>
    </body>
</html>
```

## Syntax

### Text
HTML document text is displayed on the web page as is with a couple exceptions. 
1. White space is limited to one.  So multiple spaces are reduced to one.
2. Line breaks aren't displayed.
3. HTML elements are rendered and not displayed as text.

### Tag with content
Example using the div tag with only inner content.
```html
<div>
    The div tag is an example of a block tag that can contain content
</div>
```

### Tag without content
Some tags don't have inner content, but might have attributes.

Example of img tag (no inner content but has attributes)
```html
<img src="path/to/img.png"/>
```

Example of br tag (no inner content and no attributes)
```html
some text
<br/>
some test after the break
```

### Common tags
A update to date and comprehensive list of HTML tags can be found [here](https://www.w3schools.com/TAgs/default.asp).

| Tag      | Description | Example |
|----------| --- | --- |
| `<html>` | The html tag is used to define the beginning of ALL html documents. | `<html><head></head><body></body></html>` |
| `<head>` | The head tag is used to define meta data about the document such as scripts, title, etc. | `<head><title>document title</title></head>` |
| `<body>` | The body tag is used to define the body of the html docuemnt.  The body is where all the content will live. | `<body>text and other elements go here</body>` |
| `<p>`    | The paragraph tag is used to group bodies of text and provides some default white space before and after the text. | `<p>This is some paragraph text</p>` |
| `<a>`    | The anchor tag is used most commonly to link to another web page, but can be used to jump to content on the same page. | `<a href="https://www.google.com">this is a link to Google</a>` |
| `<img>`  | The image tag is used to display images in the web page. | `<img src="path/to/image.png">` |
| `<div>`  | The division tag is used to divide up a webpage. It's width is 100% of it's parent element. | `<div>some text inside the tag</div>` |

### Common tag attributes
| Tag | Description | Example                        |
|-----| --- |--------------------------------|
| id  | An arbitrary value that represents the unique identity for a html tag | `<div id="myUniqueId"></div> ` |
| class | An arbitrary value that is used to apply CSS to a tag | `<div class="myClassName"></div>` |
| src | Used in script, img, link tags to define the source file that should be linked from the document | `<img src="path/to/file.jpg">` |


# CSS
CSS stands for `Cascading Style Sheets` and is used to transform plain black and white html documents in to the colorful pages we know and love.

## Element selection
Elements can be selected by their tag type, id, and/or class, with the most common being class.  Elements can also be selected based on their relation to other elements.

[Example of selecting by class](examples/select-by-class.html)