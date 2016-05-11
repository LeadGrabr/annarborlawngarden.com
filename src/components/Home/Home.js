import { default as React, PropTypes } from 'react'
import { Heading, Section, SectionHeader } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from '@leadgrabr/gallery'
import { default as Testimonials } from '@leadgrabr/testimonials'
import { default as john } from 'components/Testimonials/john'
import { default as barbara } from 'components/Testimonials/barbara'
import { default as BrandBadges } from '@leadgrabr/brand-badges'
import { default as Flower } from 'react-icons/lib/md/filter-vintage'
import { default as Goat } from 'react-icons/lib/md/goat'
import { default as Schedule } from 'react-icons/lib/md/event-note'
import { default as Services } from '@leadgrabr/services'
import {
    brushRemoval,
    flowerBedMulching,
    hedgeTrimming,
    leafPickupAndBagging,
    mowing,
    mulchTurning
  } from 'components/Services'

const Home = (props, { rebass: { colors } }) =>
    <Page>
        <Banner/>
        <Page.Content>
            <Section>
                <Heading
                    level={2}
                    mb={2}
                    style={{ textAlign: 'center' }}
                >
                    Make Ann Arbor Lawn Garden your Lawn Care Specialist
                </Heading>
                <Gallery
                    imgProps={{
                        my: 2 // eslint-disable-line id-length
                    }}
                    photos={[
                        'wuU_SSxDeS0',
                        'DlsOa5moK4w',
                        'jJzmexjwfGE',
                        '-regSZitt5o'
                    ]}
                    size={180}
                />
            </Section>
            <Section>
                <SectionHeader
                    heading="Services"
                />
                <Services
                    mb={4}
                    services={[
                        {
                            ...hedgeTrimming,
                            href: '/services/hedge-trimming'
                        },
                        {
                            ...leafPickupAndBagging,
                            href: '/services/leaf-pickup-and-bagging'
                        },
                        {
                            ...mowing,
                            href: '/services/mowing'
                        },
                        {
                            ...mulchTurning,
                            href: '/services/mulch-turning'
                        },
                        {
                            ...brushRemoval,
                            href: '/services/brush-removal'
                        },
                        {
                            ...flowerBedMulching,
                            href: '/services/flower-bed-mulching'
                        }
                    ]}
                />
            </Section>
            <Testimonials
                imgSize={200}
                testimonials={[
                    {
                        ...john,
                        href: '/testimonials/john'
                    },
                    {
                        ...barbara,
                        href: '/testimonials/barbara'
                    }
                ]}
                truncateTextAt={200}
            />
            <Section>
                <BrandBadges
                    {...props}
                    backgroundColor={colors.white}
                    badges={[
                        {
                            heading: 'Beautiful Flower Bed Installations',
                            icon: <Flower size={60}/>
                        },
                        {
                            heading: 'Call and Schedule a Consultation Today',
                            icon: <Schedule size={60}/>
                        },
                        {
                            heading: 'Pet Friendly',
                            icon: <Goat size={60}/>
                        }
                    ]}
                    color="primary"
                />
            </Section>
        </Page.Content>
        <GoogleMap style={{ height: 300 }}/>
        <BottomBar/>
    </Page>

Home.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default Home
