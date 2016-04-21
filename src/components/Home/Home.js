import { default as React } from 'react'
import { Heading, Section, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from '@leadgrabr/gallery'
import { default as Testimonials } from '@leadgrabr/testimonials'
import { default as headshotOne } from './headshot-one.jpg'
import { default as headshotTwo } from './headshot-two.jpg'
import { default as BrandBadges } from '@leadgrabr/brand-badges'
import { default as Flower } from 'react-icons/lib/md/filter-vintage'
import { default as Goat } from 'react-icons/lib/md/goat'
import { default as Schedule } from 'react-icons/lib/md/event-note'

const testimonialText = `
    Wisi magna pri ei, equidem tibique an eum, per te quod similique.
    Ne quas malorum labitur eos, nam ei impetus veritus. Ex dico diceret
    ancillae duo. Vel legendos pericula ea, per esse rationibus ut.
`

const Home = (props) =>
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
                <Text style={{ textAlign: 'center' }}>
                    Whether you're planning an engagement,
                    need lifestyle photography, or are just
                    looking to document your latest adventures,
                    Ann Arbor Pictures has the equipment and
                    the expertise to get you your perfect
                    image in a unique vintage style.
                </Text>
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
                <Testimonials
                    testimonials={[
                        {
                            img: headshotOne,
                            name: 'John Appleseed',
                            text: testimonialText
                        }, {
                            img: headshotTwo,
                            name: 'Barbara Foo',
                            text: testimonialText
                        }
                    ]}
                />
            </Section>
            <Section>
                <BrandBadges
                    {...props}
                    backgroundColor="default"
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
                    color="secondary"
                />
            </Section>
        </Page.Content>
        <GoogleMap style={{ height: 300 }}/>
        <BottomBar/>
    </Page>

export default Home
