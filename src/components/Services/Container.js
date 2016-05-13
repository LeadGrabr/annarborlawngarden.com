import { default as React, Component, PropTypes } from 'react'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Divider, Heading } from 'rebass'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { SUBMIT_LEAD, submitLead } from 'redux/modules/app'
import { connect } from 'redux-await'

@connect(() => ({}), { submit: submitLead })

export default class ServiceContainer extends Component {

    static propTypes = {
        params: PropTypes.object.isRequired,
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    getService(name) {
        try {
            return require(`./${name}`).default // eslint-disable-line global-require
        } catch (err) {
            return {}
        }
    }

    render() {
        const { params, statuses, submit } = this.props
        const { img, name } = this.getService(params.name)
        return (
            <Page>
                <Page.Content>
                    <Flex column>
                        <Heading
                            level={1}
                            mb={2}
                        >
                            {name}
                        </Heading>
                        <img
                            alt={name}
                            src={img}
                        />
                        <Divider/>
                        <Heading
                            mb={3}
                            style={{ textAlign: 'center' }}
                        >
                            Get your free quote today
                        </Heading>
                        <LeadForm
                            messageProps={{
                                label: 'Breifly describe your event'
                            }}
                            onSuccess={() => {
                                console.log('success')
                            }}
                            p={1}
                            status={statuses[SUBMIT_LEAD]}
                            submit={submit}
                        />
                    </Flex>
                </Page.Content>
            </Page>
        )
    }
}
