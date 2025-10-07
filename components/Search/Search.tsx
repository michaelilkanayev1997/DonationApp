import { FC, useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

interface SearchProps {
  onSearch?: (text: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch = () => {} }) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef<TextInput>(null);
  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    onSearch(text);
  };

  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        value={search}
        onChangeText={text => {
          handleSearch(text);
        }}
        ref={textInputRef}
        style={styles.searchInput}
        placeholder="Search..."
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
});

export default Search;
