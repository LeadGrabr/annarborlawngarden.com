/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Page } from 'components'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { SUBMIT_LEAD, submitLead } from 'redux/modules/app'

@connect(() => ({}), { submit: submitLead })

export default class Contact extends Component {

    static propTypes = {
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    render() {
        const { statuses, submit } = this.props
        return (
            <Page>
                <Page.Title>
                    Contact us today
                </Page.Title>
                <Page.Content>
                    <LeadForm
                        buttonProps={{
                            backgroundColor: 'primary',
                            color: 'secondary'
                        }}
                        status={statuses[SUBMIT_LEAD]}
                        submit={submit}
                        theme="secondary"
                    />
                </Page.Content>
            </Page>
        )
    }
}
