import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import background from '../res/img_background.jpg'
import icon from '../icon.png'
export default function Menu(){
    return(
        {props.showMenu &&
        <View>
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
const styles = StyleSheet.create({

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
    }
})