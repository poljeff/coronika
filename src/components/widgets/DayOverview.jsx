import UilLocationPinAlt from '@iconscout/react-native-unicons/icons/uil-location-pin-alt';
import UilSmile from '@iconscout/react-native-unicons/icons/uil-smile';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../constants';
import withI18n from '../../i18n';
import withViewportUnits from '../../utils/withViewportUnits';

const DayDate = memo(({ formatTimeDistance, isDark, isToday, isTotal, styles, timestamp, today, __ }) => {
  return (
    <View style={styles.dayDateWrapper}>
      {isTotal && (
        <Text style={{ ...styles.dayValueCaption, ...(isDark && styles.dayValueNumberDark) }}>
          {formatTimeDistance(moment(timestamp).add(1, 'minute').valueOf(), today.valueOf())}
        </Text>
      )}

      {!isTotal && (
        <Text style={{ ...styles.dayValueCaption, ...(isDark && styles.dayValueNumberDark) }}>
          {isToday ? __('today') : moment(timestamp).from(today)}
        </Text>
      )}

      {isTotal && (
        <Text style={{ ...styles.dayValue, ...(isDark && styles.dayValueNumberDark) }}>
          {isTotal ? __('total') : moment(timestamp).format('dd DD.MMM')}
        </Text>
      )}

      {!isTotal && (
        <View style={styles.dayValueWrapper}>
          <Text style={{ ...styles.dayValue, ...(isDark && styles.dayValueNumberDark), ...styles.dayValueDay }}>
            {moment(timestamp).format('dd')}
          </Text>
          <Text style={{ ...styles.dayValue, ...(isDark && styles.dayValueNumberDark) }}>
            {moment(timestamp).format('DD.MMM')}
          </Text>
        </View>
      )}
    </View>
  );
});

const DayLocations = memo(({ isDark, locations, showIcons, styles, vw, __ }) => {
  return (
    <View style={styles.dayLocationsWrapper}>
      <Text style={{ ...styles.dayValueCaption, ...(isDark && styles.dayValueNumberDark) }}>{__('locations')}</Text>
      {showIcons ? (
        <UilLocationPinAlt color={'#000000'} size={vw(8.2)} style={styles.dayIcon} />
      ) : (
        <Text
          style={{
            ...styles.dayValue,
            ...styles.dayValueNumber,
            ...(!locations && styles.dayValueNumberEmpty),
            ...(isDark && styles.dayValueNumberDark),
          }}>
          {locations || '-'}
        </Text>
      )}
    </View>
  );
});

const DayPersons = memo(({ isDark, persons, showIcons, styles, vw, __ }) => {
  return (
    <View style={styles.dayPersonsWrapper}>
      <Text style={{ ...styles.dayValueCaption, ...(isDark && styles.dayValueNumberDark) }}>{__('persons')}</Text>
      {showIcons ? (
        <UilSmile color={'#000000'} size={vw(8.2)} style={styles.dayIcon} />
      ) : (
        <Text
          style={{
            ...styles.dayValue,
            ...styles.dayValueNumber,
            ...(!persons && styles.dayValueNumberEmpty),
            ...(isDark && styles.dayValueNumberDark),
          }}>
          {persons || '-'}
        </Text>
      )}
    </View>
  );
});

const DayOverview = ({
  isDark,
  isEmphasized,
  isTotal,
  isTranslucent,
  locations,
  persons,
  showIcons,
  timestamp,
  today,
  formatTimeDistance,
  vw,
  getFontFamilyBold,
  getFontFamilyRegular,
  __,
}) => {
  // noinspection JSUnresolvedFunction
  const styles = StyleSheet.create({
    day: {
      backgroundColor: COLOR_SECONDARY,
      borderRadius: vw(2.3),
      display: 'flex',
      flexDirection: 'row',
      marginBottom: vw(2),
      marginLeft: vw(2.5),
      marginRight: vw(2.5),
      padding: vw(3),
      paddingBottom: vw(2.5),
      paddingTop: vw(2.5),
    },
    dayDark: {
      backgroundColor: '#000000',
    },
    dayEmphasized: {
      borderColor: COLOR_PRIMARY,
      borderWidth: vw(0.5),
      padding: vw(2.5),
      paddingBottom: vw(2),
      paddingTop: vw(2),
    },
    dayTranslucent: {
      opacity: 0.4,
    },
    dayIcon: {
      alignSelf: 'flex-end',
    },
    dayValue: {
      fontFamily: getFontFamilyBold(),
      fontSize: vw(7),
      textTransform: 'lowercase',
    },
    dayValueDay: {
      marginRight: vw(2.5),
    },
    dayValueNumber: {
      color: COLOR_PRIMARY,
      textAlign: 'right',
    },
    dayValueNumberEmpty: {
      color: '#d6d6d6',
    },
    dayValueNumberDark: {
      color: '#ffffff',
    },
    dayValueCaption: {
      color: '#707070',
      fontFamily: getFontFamilyRegular(),
      fontSize: vw(2.7),
      marginBottom: vw(0.5),
      textTransform: 'lowercase',
    },
    dayValueCaptionDark: {
      color: '#ffffff',
    },
    dayValueWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    dayDateWrapper: {
      flex: 1,
      flexDirection: 'column',
    },
    dayPersonsWrapper: {
      flexGrow: 0,
      flexShrink: 0,
    },
    dayLocationsWrapper: {
      flexGrow: 0,
      flexShrink: 0,
      marginRight: vw(1.8),
    },
  });

  const currentDay = moment(timestamp);
  const isToday = currentDay.diff(today) === 0;

  return (
    <View
      style={{
        ...styles.day,
        ...(isDark && styles.dayDark),
        ...(isEmphasized && styles.dayEmphasized),
        ...(isTranslucent && styles.dayTranslucent),
      }}>
      <DayDate {...{ formatTimeDistance, isDark, isToday, isTotal, styles, timestamp, today, __ }} />
      <DayLocations {...{ isDark, locations, showIcons, styles, vw, __ }} />
      <DayPersons {...{ isDark, persons, showIcons, styles, vw, __ }} />
    </View>
  );
};

export default memo(withI18n(withViewportUnits(DayOverview)));
