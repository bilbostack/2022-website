import React from "react"

export default ({ data }) => <div id="inner-header" class="jumbotron">
        <div class="container">
            <div className="row">
                <div className="col-sm-7">
                    <a title={data.conference_name} href="/"><img id="logo" alt={data.conference_name} src={data.logo}/></a>
                </div>
                <div className="col-sm-5 text-center">
                    <p class="lead">{data.conference_date}</p>
                    <a class="btn btn-primary btn-lg" href={data.header_banner.cta_url} role="button">{data.header_banner.cta_text}</a>
                </div>
            </div> 
        </div>
    </div>
  

