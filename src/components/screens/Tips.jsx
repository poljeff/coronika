import UilArrowLeft from '@iconscout/react-native-unicons/icons/uil-arrow-left';
import UilArrowRight from '@iconscout/react-native-unicons/icons/uil-arrow-right';
import React, { memo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../constants';
import Header from '../widgets/Header';
import Layout from '../widgets/Layout';
import withI18n from '../../i18n';
import withViewportUnits from '../../utils/withViewportUnits';

const Tips = ({ navigation, vw, getFontFamilyBold, getFontFamilyRegular, isRTL, __ }) => {
  // noinspection JSUnresolvedFunction
  const styles = StyleSheet.create({
    contentText: {
      fontFamily: getFontFamilyRegular(),
      fontSize: vw(4.5),
      lineHeight: vw(7),
    },
    headerHeadline: {
      fontFamily: getFontFamilyBold(),
      fontSize: vw(5),
      marginLeft: 'auto',
      textTransform: 'lowercase',
    },
    tipIcon: {
      marginBottom: -vw(3),
      marginRight: -vw(2),
      marginTop: -vw(3),
    },
    tipText: {
      color: '#000000',
      fontFamily: getFontFamilyRegular(),
      fontSize: vw(4.2),
    },
    tipTextWrapper: {
      width: '85%',
    },
    tipWrapper: {
      alignItems: 'center',
      backgroundColor: COLOR_SECONDARY,
      borderRadius: vw(2.3),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: vw(2.3),
      padding: vw(3),
      paddingBottom: vw(3.8),
      paddingTop: vw(3.8),
    },
    view: {
      backgroundColor: '#ffffff',
      flex: 1,
      flexDirection: 'column',
      padding: vw(2.5),
      width: '100%',
    },
    viewContent: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
    viewContentList: {
      marginBottom: vw(10),
      marginTop: vw(4),
    },
    viewContentText: {
      paddingLeft: vw(2.5),
      paddingRight: vw(2.5),
      paddingTop: vw(2.5),
    },
  });

  const tipsList = [
    {
      headline: __('tips.corona-warn-app.headline'),
      routeName: 'TipCoronaWarnApp',
    },
    {
      headline: __('tips.distance-and-mouthguard.headline'),
      routeName: 'TipDistanceAndMouthguard',
    },
    {
      headline: __('tips.washing-hands.headline'),
      routeName: 'TipWashingHands',
    },
    {
      headline: __('tips.avoid-crowds-of-people.headline'),
      routeName: 'TipAvoidCrowdsOfPeople',
    },
    {
      headline: __('tips.mouthguard.headline'),
      routeName: 'TipMouthguard',
      hide: true,
    },
    {
      headline: __('tips.coughing-sneezing.headline'),
      routeName: 'TipCoughingSneezing',
    },
    {
      headline: __('tips.not-feeling-well.headline'),
      routeName: 'TipNotFeelingWell',
    },
    {
      headline: __('tips.am-i-infected.headline'),
      routeName: 'TipAmIInfected',
    },
    {
      headline: __('tips.reliable-sources.headline'),
      routeName: 'TipReliableSources',
    },
  ];

  return (
    <Layout backgroundColor={COLOR_SECONDARY}>
      <Header>
        <Text style={styles.headerHeadline}>{__('tips-screen.header.headline')}</Text>
      </Header>

      <ScrollView style={styles.view}>
        <View style={{ ...styles.viewContent, ...styles.viewContentText }}>
          <Text style={styles.contentText}>{__('tips-screen.intro.text')}</Text>
        </View>

        <View style={{ ...styles.viewContent, ...styles.viewContentList }}>
          {tipsList
            .filter(({ hide }) => !hide)
            .map(({ headline, routeName }, index) => (
              <TouchableOpacity
                key={`tip-${index}`}
                onPress={() => navigation.navigate(routeName)}
                style={styles.tipWrapper}>
                <View style={styles.tipTextWrapper}>
                  <Text style={styles.tipText}>{headline}</Text>
                </View>

                <View style={styles.tipIcon}>
                  {isRTL ? (
                    <UilArrowLeft size={vw(11)} color={COLOR_PRIMARY} />
                  ) : (
                    <UilArrowRight size={vw(11)} color={COLOR_PRIMARY} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default memo(withI18n(withViewportUnits(Tips)));
