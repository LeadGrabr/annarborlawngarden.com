/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { default as About } from './About'
import { Page } from 'components'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { Heading, Section, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { default as Gallery } from '@leadgrabr/gallery'
import { connect } from 'redux-await'
import { SUBMIT_LEAD, submitLead } from 'redux/modules/app'

@connect(
    (state) => ({
        width: state.app.width
    }),
    { submit: submitLead }
)

export default class Container extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired
    };

    static contextTypes = {
        breakpoints: PropTypes.object.isRequired
    };

    render() {
        const { statuses, submit, width } = this.props
        const { medium } = this.context.breakpoints
        const contactBoxProps = {
            mb: 2,
            style: {
                width: width > medium ? '50%' : '100%'
            }
        }
        return (
            <Page>
                <Page.Title>
                    About Ann Arbor Lawn & Garden
                </Page.Title>
                <Page.Content>
                    <Section>
                        <About/>
                    </Section>
                    <Section>
                        <Gallery
                            count={3}
                            imgProps={{
                                m: 2 // eslint-disable-line id-length
                            }}
                            photos={[
                                'DlsOa5moK4w',
                                'HEc78rsnoNg',
                                'jJzmexjwfGE'
                            ]}
                            size={150}
                        />
                    </Section>
                    <Section>
                        <Flex column={!(width > medium)}>
                            <Box
                                mr={width > medium ? 2 : 0}
                                {...contactBoxProps}
                            >
                                <Heading level={2}>
                                    Contact us today
                                </Heading>
                                <Text>
                                    Et his feugait denique appellantur. Meis euismod no mel, at
                                    oblique praesent est, quo cu paulo debitis postulant. Cu agam
                                    hendrerit vix, clita omnium verterem ei qui. Vel in decore
                                    mediocritatem, dicam graece urbanitas his cu.
                                </Text>
                                <Text>
                                    Te dolor nullam nonumes his. Sit natum postea accusata te,
                                    appetere dissentiet has te, id exerci labores pertinax nec.
                                    In vel invenire delicatissimi, nam diceret civibus ex. Cu
                                    omnes mucius est, qui ei dico eripuit.
                                </Text>
                                <Text>
                                    Ea habemus quaerendum usu, et eam dicat invenire salutandi,
                                    ei mel reque iuvaret commune. Nec no congue exerci. Pro ei
                                    putant expetenda deterruisset, te mutat tempor neglegentur
                                    his. At modo facer ubique sea, te vidit latine eleifend eam.
                                </Text>
                            </Box>
                            <Box
                                ml={width > medium ? 2 : 0}
                                {...contactBoxProps}
                            >
                                <LeadForm
                                    buttonProps={{
                                        backgroundColor: 'primary',
                                        color: 'secondary'
                                    }}
                                    status={statuses[SUBMIT_LEAD]}
                                    submit={submit}
                                    theme="secondary"
                                />
                            </Box>
                        </Flex>
                    </Section>
                </Page.Content>
            </Page>
        )
    }
}
