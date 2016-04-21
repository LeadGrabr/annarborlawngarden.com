import './style.scss'
import { Component, PropTypes } from 'react'

const baseColors = {
    black: '#333',
    white: '#fff',
    gray: '#ddd',
    midgray: '#888',
    blue: '#cfdbed',
    red: '#f52',
    orange: '#f70',
    green: '#344410',
    pink: '#d26d36',
    yellow: '#e7e3c5'
}

const colors = {
    ...baseColors,
    primary: baseColors.yellow,
    secondary: baseColors.green,
    default: baseColors.white,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 31, 27, 19, 18, 14, 12]

export default class Theme extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    static childContextTypes = {
        breakpoints: PropTypes.object,
        rebass: PropTypes.object,
        reflexbox: PropTypes.object
    };

    getChildContext() {
        return {
            breakpoints: {
                small: 425,
                medium: 768,
                large: 1024
            },
            rebass: {
                colors,
                fontSizes,
                scale,
                Badge: {
                    fontWeight: 'lighter'
                },
                Button: {
                    color: colors.black
                },
                Drawer: {
                    overflow: 'auto'
                },
                Input: {
                    fontSize: fontSizes[5]
                },
                Label: {
                    display: 'block',
                    marginBottom: 10
                },
                Menu: {
                    borderColor: 'transparent'
                },
                NavItem: {
                    fontWeight: 200
                },
                Section: {
                    padding: scale[3]
                },
                SectionHeader: {
                    textAlign: 'center'
                },
                Text: {
                    fontSize: fontSizes[5],
                    marginBottom: scale[2],
                    marginTop: scale[2]
                },
                Textarea: {
                    fontSize: fontSizes[5]
                },
                Toolbar: {
                    backgroundColor: colors.white,
                    color: colors.black
                }
            },
            reflexbox: {
                scale
            }
        }
    }

    render() {
        return this.props.children
    }
}
