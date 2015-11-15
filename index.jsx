"use strict"
import React, { Component } from "react";

export default class Svg extends Component {
   propTypes: {
      center: React.PropTypes.bool,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number,
      minWidth: React.PropTypes.number,
      maxWidth: React.PropTypes.number,
   }
   constructor(props) {
      super(props);
      // this.state = {};
      this.defaultProps = {
         center: false,
      };
      // this.statics = {};
   }
   render() {
      // variables
      const width = this.props.width;
      const height = this.props.height ? this.props.height : width;
      const minWidth = this.props.minWidth || 0;
      const maxWidth = this.props.maxWidth || width;

      // container styling
      const containerStyle = {
         maxWidth: maxWidth + "px",
         minWidth: minWidth + "px",
      };

      if ( this.props.center === "true" || this.props.center === true ) {
         containerStyle.margin = "auto";
      }
      // wrap styling
      const wrapStyle = {
         height: 0,
         paddingBottom: height / width * 100 + "%",
         position: "relative",
         width: "100%",
      };

      // svg props
      const svgInjectProps = {
         preserveAspectRatio:"xMinYMin meet",
         width: null,
         height: null,
         style: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom:0,
            right:0,
            display: "block",
            fill: "currentColor",
            // width: "100%",
            // height: "100%",
         },
      };
      const svgProps = Object.assign( {}, this.props.children.props, svgInjectProps );

      return (
         <div
            { ...this.props }
            style={ Object.assign( {}, this.props.style, containerStyle ) }
            center={ null }
            width={ null }
            height={ null }
         >
            <div
               style={ wrapStyle }
            >
               <svg { ...svgProps } />
            </div>
         </div>
      );
   }
}
