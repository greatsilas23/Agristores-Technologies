import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Separator from './components/Separator.js'
import Card from './components/Card.js'
import SmallCard from './components/SmallCard.js'
import MenuBar from './components/MenuBar.js'
import TabLink from './components/TabLink.js'
import TabContent from './components/TabContent.js'
import background from './res/img_background.jpg'
import icon from './res/icon.png'
import coo from './res/coo.jpeg'
import cio from './res/cio.jpg'
import ceo from './res/ceo_blair.jpg'
import cto from './res/cto.jpg'
import cco from './res/cco.jpg'
import git from './res/git.png'
import vegetables from './res/vegetables.png'
import fruits from './res/fruits.png'
import beverages from './res/beverages.png'
import liveTreesAndPlants from './res/live_plants.jpeg'
import animalProducts from './res/animal_products.jpeg'
import goal from './res/aim.svg'
import mission from './res/mission.png'
import target from './res/target.png'
import location from './res/location.png'
import availability from './res/availability.png'
import year from './res/year.png'
import sponsor from './res/sponsor.png'
import licence from './res/licence.png'
import facebook from './res/facebook.png'
import linkedin from './res/in.png'
import instagram from './res/instagram.png'
import mail from './res/mail.png'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        showAbout: true,
        showDiversification: true,
        showDepartments: true,
        showFeatures: true,
        showFeedback: true,
        showTopBar: true,
        showMenu: true,
        showForms: true,
        separators: {
            about: 'ABOUT',
            diversifications: 'DIVERSIFICATION',
            departments: 'DEPARTMENTS',
            features: 'FEATURED',
            forms: 'FORMS',
            records: 'RECORDS',
            feedback: 'FEEDBACK'
        },
        about: [
            {content: 'goal', description: 'To establish an online service that connects our clients with agriculture suppliers from allover the world', image: goal },
            {content: 'mission', description: 'To supply agriculture globally at affordable rates', image: mission},
            {content: 'target', description: 'Europe, North America, Asia', image: target},
            {content: 'location', description: 'online', image: location},
            {content: 'availability', description: '24 hours', image: availability},
            {content: 'year', description: '2021', image: year},
            {content: 'sponsor', description: 'Nyamwas-ENT', image: sponsor},
            {content: 'licence', description: 'copywright 2021', image: licence}
        ],
        diversifications: [
            {content: 'AgriPay', description: 'Agripay', image: git},
            {content: 'AgriNews', description: 'Agrinews', image: git},
            {content: 'Agristores Warehouses', image: git},
            {content: 'Agristores Digital Information and Information Platforms', image: git},
            {content: 'Agristores Logistics and Transport Networks', image: git}
        ],
        departments: [
            {content: 'CCO', description: 'Chief Coordination Officer', image: cco},
            {content: 'CIO', description: 'Chief Internal Officer', image: cio},
            {content: 'CEO', description: 'Chief Executive Officer', image: ceo},
            {content: 'COO', description: 'Chief Operations Officer', image: coo},
            {content: 'CTO', description: 'Chief Technology Officer', image: cto}
        ],
        features: [
            {content: 'Vegetables', image: vegetables},
            {content: 'Fruits', image: fruits},
            {content: 'Beverages', image: beverages},
            {content: 'Live Trees And Plants', image: liveTreesAndPlants},
            {content: 'Animal Products', image: animalProducts},
        ],
        forms: {
            tabLinks: [
                { content: 'executive' },
                { content: 'feature' },
                { content: 'subsidiary' }
            ],
            tabContents: [
                {content: 'Executive', fieldOne: 'Name', fieldTwo: 'Department'},
                {content: 'Feature', fieldOne: 'Id', fieldTwo: 'Feature'},
                {content: 'Subsidiary', fieldOne: 'Id', fieldTwo: 'Subsidiary'}
            ]
        },
        records: {},
        feedbacks: [
             {content: 'Instagram', image: instagram},
             {content: 'LinkedIn', image: linkedin},
             {content: 'Facebook', image: facebook},
             {content: 'Github', image: git},
             {content: 'E-Mail', image: mail}
        ]
    }
  }
  handleLaunch = () => {
    this.setState({ showMenu: true})
    this.setState({ showTopBar: true})
    this.setState({ showRoot: false})
  }

  render(){
      return (
        <View
            style={styles.root}
        >
            {this.state.showTopBar && <MenuBar></MenuBar>}
            {this.state.showMenu &&
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{width: '60vw', height: '70vh'}} source={background}/>
                <Image style={{height: '10vh', width: '10vw', position: 'absolute', top: '42vh', left: '25vw'}} source={icon}/>
                <Text style={{fontSize: '4vh', color: '#fff', fontWeight: 'bold', position: 'absolute', top: '30vh', left: '15vw'}}>AGRISTORES TECHNOLOGIES</Text>
                <Separator
                    separatorText={this.state.separators.about}></Separator>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer} >
                {this.state.showAbout &&
                    this.state.about.map((item) => <Card itemHeading={item.content} itemDescription={item.description} itemImage={item.image}></Card>)
                }
                </ScrollView>
                <Separator separatorText={this.state.separators.diversifications}></Separator>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
                {this.state.showDiversification &&
                    this.state.diversifications.map((diversification) => <Card itemHeading={diversification.content} itemImage={diversification.image}></Card>)
                }
                </ScrollView>
                <Separator separatorText={this.state.separators.departments}></Separator>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
                {this.state.showDepartments &&
                    this.state.departments.map((department) => <Card itemHeading={department.content} itemDescription={department.description} itemImage={department.image}></Card>)
                }
                </ScrollView>
                <Separator separatorText={this.state.separators.features}></Separator>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
                {this.state.showFeatures &&
                    this.state.features.map((feature) => <Card itemHeading={feature.content} itemImage={feature.image}></Card>)
                }
                </ScrollView>
                <Separator separatorText={this.state.separators.forms}></Separator>
                {this.state.showForms &&
                <View style={styles.forms}>
                    {this.state.forms.tabLinks.map((tabLink) => {<TabLink itemContent={tabLink.content}></TabLink>})}
                    {this.state.forms.tabContents.map((tabContent) => {<TabContent itemContent={tabContent.content} itemFieldOne={tabContent.content} itemFieldTwo={tabContent.content}></TabContent>})}
                </View>}
                <Separator separatorText={this.state.separators.feedback}></Separator>
                <View style={styles.smallCardContainer}>
                {this.state.showFeedback &&
                    this.state.feedbacks.map((feedback) => <SmallCard itemHeading={feedback.content} itemImage={feedback.image}></SmallCard>)
                }
                </View>
            </ScrollView>}
        </View>
      )
  }
}
const styles = StyleSheet.create({
    root: {
        width: '60vw',
        height: '100vh',
        backgroundColor: '#fff'
    },
    cardContainer: {
        width: '60vw',
        height: '45vh',
        backgroundColor: '#fff',
    },
    smallCardContainer: {
        width: '60vw',
        height: '45vh',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

})
