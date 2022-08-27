import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-5 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="350px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div class="icon_container">
                    <img src="https://img.icons8.com/external-mixed-kendis-lasman/64/000000/external-gym-love-family-mixed-mixed-kendis-lasman-2.png"/>
                    <img src="https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-boxing-fitness-filled-outline-filled-outline-icons-maxicons.png"/>
                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-baseball-sports-and-games-icongeek26-flat-icongeek26.png"/>
                    <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/000000/external-photograph-lifestyle-entertainment-vol1-microdots-premium-microdot-graphic.png"/>
                  </div>


                </span>
              </div>
            </div>

            <div className="col-md-7 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
