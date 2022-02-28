import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS , SIZES } from '../constants';

export default  DropdownScreen = (styleSelect) => {
    const [selectedUniversityId,setSelectedUniversityId] = React.useState("University of Dschang")
    return (
        <RNPickerSelect  
            style={{inputAndroid:{backgroundColor:COLORS.lightGray2,borderRadius:SIZES.radius,} }}
            placeholder={""}
            value={selectedUniversityId}
            onValueChange={(value) => setSelectedUniversityId(value)}
            items={[
                { label: 'University of Dschang', value: 'University of Dschang',key:1},
                { label: 'University of Ngoa Ekele', value: 'University of Ngoa Ekele' ,key:2},
                { label: 'University of Douala', value: 'University of Douala',key:3 },
            ]}
        />
    );
};
