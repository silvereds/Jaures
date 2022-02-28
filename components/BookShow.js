import React from "react"
import { TouchableOpacity , Image , View, Text} from 'react-native'
import { COLORS, FONTS, SIZES, icons, images } from './../constants';
const BookShow = ({ item, index }) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 250,
                    borderRadius: 20
                }}
            />

            {/* Book Info */}
            <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={icons.clock_icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />
                <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray1 }}>{item.lastRead}</Text>

                <Image
                    source={icons.page_icon}
                    style={{
                        marginLeft: SIZES.radius,
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray
                    }}
                />
                <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default BookShow