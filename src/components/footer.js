import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Organizers from "./organizers"
import Nav from "./nav"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            conference_hashtag
            organizers {
              name
              link
              image
            }
            footer_links {
              link
              title
              external
            }
          }
        }
      }
    `}
    render={data => {
      const configData = data.site.siteMetadata

      return (
        <footer>
          <section id="about">
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                  <Organizers organizers={configData.organizers} />
                </div>

                <div class="col-md-5 text-center">
                  <h4>Bilbostack 2022</h4>
                  <Nav items={configData.footer_links}></Nav>
                </div>
              </div>
            </div>
          </section>

          <section id="credit">
            <div className="container">
              Bilbostack 2022 | Website created with the{" "}
              <a href="https://github.com/asiermarques/gatsby-starter-conferencer">
                Gatsby Conferencer starter
              </a>
            </div>
          </section>
        </footer>
      )
    }}
  />
)
