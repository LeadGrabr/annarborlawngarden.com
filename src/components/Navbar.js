import { default as React, Component, PropTypes } from 'react'
import { Drawer, Fixed, NavItem, Toolbar } from 'rebass'
import { IndexLink } from 'react-router'
import { Flex } from 'reflexbox'
import { MainNav } from '.'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Menu } from 'react-icons/lib/md/menu'
import { default as color } from 'color'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class Navbar extends Component {

    static contextTypes = {
        breakpoints: PropTypes.object.isRequired,
        rebass: PropTypes.object.isRequired
    };

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    state = {}

    render() {
        const { breakpoints: { small }, rebass: { colors } } = this.context
        const { drawer } = this.state
        const { width } = this.props
        const iconSize = 17
        const isMobile = !(width > small)

        if (!width) {
            return null
        }

        return (
            <Fixed style={{ width: '100%' }}>
                <Toolbar
                    style={{
                        boxShadow: `0px -4px 10px ${color(colors.black).alpha(0.4).rgbString()}`
                    }}
                >
                    <Flex
                        align="center"
                        justify={isMobile ? 'center' : 'space-between'}
                        style={{
                            width: '100%'
                        }}
                    >
                        <If condition={isMobile}>
                            <Menu
                                onClick={() => this.setState({ drawer: true })}
                                size={iconSize}
                                style={{
                                    marginTop: (iconSize / 2) * -1,
                                    position: 'absolute',
                                    top: '50%'
                                }}
                            />
                        </If>
                        <NavItem
                            color="secondary"
                            is={IndexLink}
                            style={{
                                fontWeight: 600,
                                margin: isMobile ? 'auto' : 'inherit'
                            }}
                            to="/"
                        >
                            AnnArborLawnGarden.com
                        </NavItem>
                        <If condition={!isMobile}>
                            <MainNav/>
                        </If>
                    </Flex>
                    <If condition={isMobile}>
                        <Drawer
                            color={colors.black}
                            open={drawer}
                            style={{
                                boxShadow: (
                                    !drawer
                                    ? null
                                    : `0px 0px 5px ${color(colors.black).alpha(0.2).rgbString()}`
                                )
                            }}
                            width="100%"
                        >
                            <Flex
                                justify="flex-end"
                                mb={2}
                            >
                                <Close
                                    onClick={() => this.setState({ drawer: false })}
                                    size={iconSize}
                                    style={{
                                        color: colors.secondary
                                    }}
                                />
                            </Flex>
                            <MainNav column/>
                        </Drawer>
                    </If>
                </Toolbar>
            </Fixed>
        )
    }
}
