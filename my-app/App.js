import {StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image} from "react-native";
const Img1 = require("./assets/svg/person.png")
const Img2 = require("./assets/svg/thinking.png")
const Img3 = require("./assets/svg/desk.png")
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


export default function TodoApp(){
return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerText}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#333",
                    fontFamily: "Lato",
                }}>Hello, Devs</Text>
                <Text style={
                    {
                        fontSize: 14,
                        color: '#666',
                        fontFamily: "Lato",
                    }
                }>14 tasks today</Text>
            </View>
                <TouchableOpacity
                    style={styles.imageButton}
                    onPress={() => {}}
                >
                    {Img1 && (
                    <Image source={Img1} style={{ height: 40, width: 40}} />
                    )}
                </TouchableOpacity>
            </View>
        <View style={styles.searchAndFilterContainer}>
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                    placeholderTextColor="#000000"
                />
            </View>
            <TouchableOpacity style={styles.tuneIconContainer}>
                <MaterialCommunityIcons name="tune" size={24} color="#ccc" style={styles.tuneIcon} />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: 700,
                paddingTop: 6,
            }}>Categories</Text>
            <View>
                <FlatList
                    data={cardData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <CardComponent
                            title={item.title}
                            subtitle={item.subtitle}
                            image={index < 2 ? [Img2, Img3][index] : null}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.cardContainer}
                />
            </View>
        </View>
        <View>
            <Text style={{
                fontSize: 20,
                lineHeight: 24,
                fontWeight: 700,
                paddingTop: 18,
                paddingBottom: 8,
                fontFamily: "Lato",
            }}>Ongoing Task</Text>
            <View>
            <FlatList
                data={listData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ListComponent title={item.title} />
                )}
            />
            </View>
        </View>
    </View>
);
}
const cardData = [
    { id: 1, title: 'Exercise', subtitle: '12 Tasks' },
    { id: 2, title: 'Study', subtitle: '12 Tasks' },
    { id: 3, title: 'Work', subtitle: '8 Tasks' },
    { id: 4, title: 'Code', subtitle: '2 Tasks' },
    { id: 5, title: 'Dance', subtitle: '1 Task' },
    { id: 6, title: 'Fun', subtitle: '1 Task' },
    { id: 7, title: 'Cook', subtitle: '2 Tasks' },
    { id: 8, title: 'Chores', subtitle: '2 Tasks' },
];

const listData = [
    { id: 1, title: 'Workout',  },
    { id: 2, title: 'Pray', },
    { id: 3, title: 'Game',  },
    { id: 4, title: 'Code',  },
    { id: 5, title: 'Dance',  },
    { id: 6, title: 'Fun',  },
    { id: 7, title: 'Cook',  },
    { id: 8, title: 'Chores',  },
    { id: 9, title: 'Sing',  },
    { id: 10, title: 'Dance',  },
    { id: 11, title: 'Learn',  },
    { id: 12, title: 'Wash',  },
    { id: 13, title: 'Swim',  },
    { id: 14, title: 'Fix',  },
    { id: 15, title: 'Golf',  },
];

const CardComponent = ({ title, subtitle, image }) => {
    return (
        <View style={styles.card1}>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                {image && (
                    <View style={styles.imageContainer1}>
                        <Image source={image} style={styles.imageStyle} />
                    </View>
                )}
            </View>
        </View>
    );
};

const ListComponent = ({ title }) => {
    return (
        <View style={styles.card2}>
            <View style={styles.cardContent}>
                <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        paddingTop: 30,
                        paddingHorizontal: 20,
                    }}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F0E8',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingTop: 6,
        paddingBottom: 4,
    },
    imageButton: {
        marginLeft: 'auto', 
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: "Lato",
    },
    subheaderText: {
        fontSize: 12,
        color: '#666',
        fontFamily: "Lato",
    },
    imageContainer1: {
        marginRight: 1,
        alignSelf: 'center',
        paddingBottom: 20,
    },
    imageStyle: {
        height: 145,
        width: 150,
        paddingBottom: 4,
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchContainer: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FBF9F7',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginRight: 16,
        padding: 5,
    },
    searchIcon: {
        marginRight: 8,
        color: '#000000',
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#FBF9F7',
        fontFamily: "Lato",
    },
    tuneIconContainer: {
        padding: 13,
        width: '13%',
        backgroundColor: '#F0522F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tuneIcon: {
        color: '#FFFFFF',
    },
    card1: {
        backgroundColor: '#fff',
        borderRadius: 16,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
        width: 200,
        height: 220,

    },
    card2: {
        backgroundColor: '#fff',
        borderColor: '#E8D1BA',
        borderWidth: 1,
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
        width: 354,
        height: 142,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 12,
        paddingHorizontal: 16,
        fontFamily: "Lato",
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 16,
        fontFamily: "Lato",
    },
    cardContainer: {
        paddingTop: 6,
    },
    imageContainer2: {
        marginBottom: 8,
        alignSelf: 'center',
    },
    image2: {
        width: 151,
        height: 132,
    },
});

