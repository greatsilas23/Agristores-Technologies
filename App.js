import React, { Component, setState, useState } from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Separator from './components/Separator.js'
import Card from './components/Card.js'
import SmallCard from './components/SmallCard.js'
import MenuBar from './components/MenuBar.js'
import TabLink from './components/TabLink.js'
import TabContent from './components/TabContent.js'
import Resources from './Resources.js'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        showAbout: false,
        showDiversification: false,
        showDepartments: false,
        showFeatures: false,
        showFeedback: false,
        showTopBar: true,
        showMenu: true,
        separators: {
            about: 'ABOUT',
            diversifications: 'DIVERSIFICATION',
            departments: 'DEPARTMENTS',
            features: 'FEATURED',
            feedback: 'FEEDBACK'
        },
        about: [
            {content: 'goal', description: 'To establish an online service that connects our clients with agriculture suppliers from allover the world', image: Resources.goal },
            {content: 'mission', description: 'To supply agriculture globally at affordable rates', image: Resources.mission},
            {content: 'target', description: 'Europe, North America, Asia', image: Resources.target},
            {content: 'location', description: 'online', image: Resources.location},
            {content: 'availability', description: '24 hours', image: Resources.availability},
            {content: 'year', description: '2021', image: Resources.year},
            {content: 'sponsor', description: 'Nyamwas-ENT', image: Resources.sponsor},
            {content: 'licence', description: 'copywright 2021', image: Resources.licence}
        ],
        diversifications: [
            {content: 'AgriPay', description: 'Agripay', image: Resources.git},
            {content: 'AgriNews', description: 'Agrinews', image: Resources.git},
            {content: 'Agristores Warehouses', description: 'Agristores Warehouses', image: Resources.git},
            {content: 'Agristores Digital Information and Information Platforms', description: 'Agristores Digital and Information Platforms', image: Resources.git},
            {content: 'Agristores Logistics and Transport Networks', description: 'Agristores Logistics and Transport Networks', image: Resources.git}
        ],
        departments: [
            {content: 'CCO', description: 'Chief Coordination Officer', image: Resources.cco},
            {content: 'CIO', description: 'Chief Internal Officer', image: Resources.cio},
            {content: 'CEO', description: 'Chief Executive Officer', image: Resources.ceo},
            {content: 'COO', description: 'Chief Operations Officer', image: Resources.coo},
            {content: 'CTO', description: 'Chief Technology Officer', image: Resources.cto}
        ],
        features: [
            {content: 'Vegetables', image: Resources.vegetables},
            {content: 'Fruits', image: Resources.fruits},
            {content: 'Beverages', image: Resources.beverages},
            {content: 'Live Trees And Plants', image: Resources.liveTreesAndPlants},
            {content: 'Animal Products', image: Resources.animalProducts},
        ],
        feedbacks: [
             {content: 'Instagram', image: Resources.instagram},
             {content: 'LinkedIn', image: Resources.linkedin},
             {content: 'Facebook', image: Resources.facebook},
             {content: 'Github', image: Resources.git},
             {content: 'E-Mail', image: Resources.mail}
        ]
    }
  }
  handleAbout = () => {
	if(this.state.showAbout){
		this.setState({showAbout: false})
	} else {
		this.setState({showAbout: true})
	}
  }
  handleDiversification = () => {
	if(this.state.showDiversification){
		this.setState({showDiversification: false})
	} else {
		this.setState({showDiversification: true})
	}
  }
  handleDepartments = () => {
	if(this.state.showDepartments){
		this.setState({showDepartments: false})
	} else {
		this.setState({showDepartments: true})
	}
  }
  handleFeatures = () => {
	if(this.state.showFeatures){
		this.setState({showFeatures: false})
	} else {
		this.setState({showFeatures: true})
	}
  }
  handleFeedbacks = () => {
	if(this.state.showFeedbacks){
		this.setState({showFeedbacks: false})
	} else {
		this.setState({showFeedbacks: true})
	}
  }

  handleLoginAttempt = async () => {
       try { 
		await fetch('http://localhost:5432', this.state.about.then(response => {
		response.json().then({
			Alert.alert("Post create at:", data.this.state.about);)
	})
	}))
	}
	catch(error) {
		console.error(`${error}`)
	}
       }).then()
  }
  render(){
      return (
        <View
            style={styles.root}
        >
	    <ScrollView>
	    <TouchableOpacity onPress={this.handleAbout}><Text style={styles.separator}>{this.state.separators.about}</Text></TouchableOpacity>
            {this.state.showAbout && this.state.about.map(item => <View style={styles.card}><Image source={item.image} style={styles.image}></Image><View style={styles.cardDetails}><View style={styles.content}>{item.content}</View><View style={styles.description}>{item.description}</View></View></View>)}

	    <TouchableOpacity onPress={this.handleDiversification}><Text style={styles.separator}>{this.state.separators.diversifications}</Text></TouchableOpacity>
            {this.state.showDiversification && this.state.diversifications.map(item => <View style={styles.card}><Image source={item.image} style={styles.image}></Image><View style={styles.cardDetails}><View style={styles.content}>{item.content}</View><View style={styles.description}>{item.description}</View></View></View>)}

	    <TouchableOpacity onPress={this.handleDepartments}><Text style={styles.separator}>{this.state.separators.departments}</Text></TouchableOpacity>
            {this.state.showDepartments && this.state.departments.map(item => <View style={styles.card}><Image source={item.image} style={styles.image}></Image><View style={styles.cardDetails}><View style={styles.content}>{item.content}</View><View style={styles.description}>{item.description}</View></View></View>)}

	    <TouchableOpacity onPress={this.handleFeatures}><Text style={styles.separator}>{this.state.separators.features}</Text></TouchableOpacity>
            {this.state.showFeatures && this.state.features.map(item => <View style={styles.card}><Image source={item.image} style={styles.image}></Image><View style={styles.cardDetails}><View style={styles.content}>{item.content}</View><View style={styles.description}>{item.description}</View></View></View>)}

	    <TouchableOpacity onPress={this.handleFeedbacks}><Text style={styles.separator}>{this.state.separators.feedbacks}</Text></TouchableOpacity>
            {this.state.showFeedbacks && this.state.feedbacks.map(item => <View style={styles.card}><Image source={item.image} style={styles.image}></Image><View style={styles.cardDetails}><View style={styles.content}>{item.content}</View><View style={styles.description}>{item.description}</View></View></View>)}
            </ScrollView>
        </View>
      )
  }
}
const styles = StyleSheet.create({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#555'
    },
    separator: {
	fontSize: '5vh',
	color: '#000'
    },
    description: {
	fontSize: '3vh',
	color: '#555'
    },
    image: {
        width: '6vw',
	height: '7vh'
    },
    card: {
	backgroundColor: '#fff', 
	height: '10vh', 
	width: '95vw',
	margin: '2vw',
	boxShadow: '2vw 2vw 2vw rgba(0,0,0,0.5)', 
	flexDirection: 'row',
	borderRadius: '3vw'
    },
    cardDetails: {
	flexDirection: 'column',
    }
})
