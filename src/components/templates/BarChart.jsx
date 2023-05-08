import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const BarChartView = props =>  {
    const color = require('@assets/color.json');
    const VIEW_WIDTH = 30;
    const VIEW_HEIGHT = 90;
    const OFFSET = VIEW_WIDTH / 2 - VIEW_HEIGHT / 2
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'row',
          },

        view_progress: {
            margin: 10,
            width: VIEW_WIDTH,
            height: VIEW_HEIGHT,
            flex: 1
        },

        progress_bar: {
            transform: [{ rotate: '-90deg'},
                        {translateX: -30},
                        {translateY: -43}
                       ],
            borderRadius: 10,
            width: 100,
            height: 15,
        },

        text_progress_bar: {
            fontSize: 10,
            transform: [
                        {translateY: 80}
                       ],
        }
    });

    if (props.userScore !== undefined) {
        return (
            <View style={styles.container}>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={props.userScore.score5 % props.userScore.sum} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>5점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={props.userScore.score4 % props.userScore.sum} color={color.red}/>
                    <Text style={styles.text_progress_bar}>4점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={props.userScore.score3 % props.userScore.sum} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>3점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={props.userScore.score2 % props.userScore.sum} color={color.red}/>
                    <Text style={styles.text_progress_bar}>2점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={props.userScore.score1 % props.userScore.sum} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>1점</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={0} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>5점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={0} color={color.red}/>
                    <Text style={styles.text_progress_bar}>4점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={0} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>3점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={0} color={color.red}/>
                    <Text style={styles.text_progress_bar}>2점</Text>
                </View>
                <View style={styles.view_progress}>
                    <ProgressBar style={styles.progress_bar} progress={0} color={color.blue}/>
                    <Text style={styles.text_progress_bar}>1점</Text>
                </View>
            </View>
        );
    }
}
 
export default BarChartView