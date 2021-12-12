import React from "react"
import Meta from "../components/meta"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import Header from "../components/headerHome"
import Agenda from "../components/agenda"
import Footer from "../components/footer"
import { graphql} from "gatsby"


export default ({data}) => {

  const configData = data.site.siteMetadata;

  return <Layout>
    <Meta title={configData.conference_name + " " + configData.conference_hashtag} 
              og_title="Bilbostack 2022 - 29 de Enero en Bilbao"
              og_description="Profesionales referencia del sector tecnológico vendrán a Bilbao a compartir sus conocimientos
              sobre las diferentes temáticas más relevantes en la actualidad."
              />
    <Header data={configData}/>

    <section id="stats">
      <div className="container">
          <div className="row">
            <div className="col col-md-3 col-sm-6 col-12">
              <span>2&nbsp;tracks</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>8&nbsp;ponencias</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>~700&nbsp;asistentes</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>10x&nbsp;networking</span>
            </div>
          </div>
      </div>
    </section>

    <div id="content" class="container">

        <section id="presentation" class="text-center">
            <h2>{configData.home.title} <span>{configData.conference_hashtag}</span></h2>
            <p>{configData.home.description}</p>
            <p>
              {configData.agenda.visible ? <a href="#agenda">{configData.home.agenda_cta_text}</a> : ""}
            </p>
        </section>



        <section id="speakers" class="row">
            {configData.speakers.map((speaker, i) => {
                if (speaker.visible === "true")
                  return (<div class="col-lg-4 col-sm-6 col-xs-12"><SpeakerCard speaker={speaker}/></div>)
                else
                  return (<div class="col-lg-4 col-sm-6 col-xs-12"></div>)
            })}
        </section>

        {configData.agenda.visible ? <Agenda agenda={configData.agenda} speakers={configData.speakers}/> : ""}
    </div>

    <Footer/>

  </Layout>
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        canonical_url,
        conference_hashtag,
        logo,
        conference_name,
        conference_date,
        conference_claim
        home {
            title
            description
            agenda_cta_text
        }
        header_banner {
          cta_pre_text,
          cta_text,
          cta_url
        }
        speakers {
          visible,
          slug,
          name,
          image,
          company,
          talk{
              title,
              description
          }
        },
        agenda {
            visible,
            time_slots,
            tracks{ 
                name,
                content_in_slots {
                    type,
                    content
                }
            }
        }
      }
    }
  }
`