"use strict"
import React, { Component } from "react";

export default class Svg extends Component {
   static propTypes = {
      center: React.PropTypes.bool,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number,
      minWidth: React.PropTypes.number,
      maxWidth: React.PropTypes.number,
   };
   static defaultProps = { center: false };
   render() {
     const {
       center,
       width,
       height: propsHeight,
       minWidth: propsMinWidth,
       maxWidth: propMaxWidth,
       ...htmlProps,
     } = this.props;

      // variables
      const height = propsHeight ? propsHeight : width;
      const minWidth = propsMinWidth || 0;
      const maxWidth = propMaxWidth || width;

      // container styling
      const containerStyle = {
         maxWidth: `${maxWidth}px`,
         minWidth: `${minWidth}px`,
      };

      if (center === 'true' || center === true) containerStyle.margin = 'auto';

      // wrap styling
      const wrapStyle = {
         height: 0,
         paddingBottom: `${height / width * 100}%`,
         position: 'relative',
         width: '100%',
      };

      // svg props
      const svgInjectProps = {
         preserveAspectRatio: 'xMinYMin meet',
         width: null,
         height: null,
         style: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom:0,
            right:0,
            display: 'block',
            fill: 'currentColor',
            // width: '100%',
            // height: '100%',
         },
      };
      const svgProps = Object.assign( {}, this.props.children.props, svgInjectProps );
      return (
         <div
            {...htmlProps}
            style={Object.assign({}, this.props.style, containerStyle)}
         >
            <div style={ wrapStyle }>
               <svg {...svgProps} />
            </div>
         </div>
      );
   }
}
