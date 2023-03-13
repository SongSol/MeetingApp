import React, { Component } from 'react';
import { Image, Text } from 'react-native';

export default class ProfilePicture extends Component {
    render() {
        return (
            <Image 
                style={this.props.style}
                source={this.props.src}
            />
        );
    }

}
