import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import dashboardStyles from './style';
import { FakeActivity } from './../../fakeData/fakeActivity';

const Home = () => {
    return (
        <ScrollView>

            {/* Début du header  */}
            <View style={dashboardStyles.header}>
                <Text style={dashboardStyles.userName}>John Doe</Text>
                <Image
                    source={require('./../../assets/woman.jpg')}
                    style={dashboardStyles.userImg} 
                />
            </View>
            {/* Fin du header */}

            {/* Liste des activités */}
            <FlatList
                data={FakeActivity}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.mainText}</Text>
                        </View>
                    );
                }}
            />

            {/* Fin de liste des activités */}
        </ScrollView>
    );
};

export default Home