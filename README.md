# svg-colorize-loader
Webpack loader that allows you to change the colors of the SVG files used as background images using Sass variables. 
This is mostly applicable if you are doing a theme that supports colors customization.

## Installation

```shell
npm install svg-colorize-loader
```

## Usage

- Start with an SVG image with colors you would like to configure (for example, black or white).
- Add the loader as the first one before `url-loader`:

```js
// ...
    {
        test: /\.svg$/,
        use: [
            { loader: 'url-loader' },
            { loader: 'svg-colorize-loader', options: { color1: '#000000', color2: '#FFFFFF' }}
        ]
    }
//...
```

- List the colors you want to change in the loader options
- In the Sass file, pass the actual colors as query string parameters to the file path. You can use Sass variables :

```scss
$color1: #FF0000;
$color2: #0000FF;

@function encodecolor($string) {
    @if $string == null {
        @return '';
    }

    @if type-of($string) == 'color' {
        $hex: str-slice(ie-hex-str($string), 4);
        $string: unquote('#{$hex}');
    }
    $string: '%23' + $string;
    @return $string;
}

h1 {
    color: red;
    width: 50px;
    height: 50px;
    text-indent: -1000px;
    overflow: hidden;
    background-image: url('./small-logo.svg?color1=#{encodecolor($color2)}&color2=#{encodecolor($color1)}');
    background-size: 50px;
}
```

**Note:** `#` should be URL encoded, hence the `encodecolor` function.

## Example

See the example directory for a runnable version of the snippet above.


