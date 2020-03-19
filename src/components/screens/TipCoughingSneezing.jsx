import UilArrowLeft from '@iconscout/react-native-unicons/icons/uil-arrow-left';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../constants';
import withI18n from '../../i18n';
import withViewportUnits from '../../utils/withViewportUnits';
import Header from '../widgets/Header';
import Layout from '../widgets/Layout';
import moment from 'moment';

const TipCoughingSneezing = ({ navigation, vw, __ }) => {
  // noinspection JSUnresolvedFunction
  const styles = StyleSheet.create({
    contentHeadline: {
      fontFamily: 'JetBrainsMono-Bold',
      fontSize: vw(7),
      marginBottom: vw(3),
    },
    contentText: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: vw(4.5),
      lineHeight: vw(7),
    },
    header: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerHeadline: {
      fontFamily: 'JetBrainsMono-Bold',
      fontSize: vw(5),
      marginLeft: 'auto',
      textTransform: 'lowercase',
    },
    listItem: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: vw(4),
      width: vw(70),
    },
    listItemNumber: {
      alignItems: 'center',
      backgroundColor: COLOR_PRIMARY,
      borderRadius: 50,
      height: vw(10),
      justifyContent: 'center',
      marginRight: vw(6),
      width: vw(10),
    },
    listItemNumberText: {
      color: '#ffffff',
      fontFamily: 'JetBrainsMono-Bold',
      fontSize: vw(4),
    },
    listItemText: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: vw(4.5),
      lineHeight: vw(7),
      marginTop: vw(2),
    },
    view: {
      backgroundColor: '#ffffff',
      flex: 1,
      flexDirection: 'column',
      padding: vw(8),
      width: '100%',
    },
    viewContent: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
    viewContentList: {
      marginTop: vw(4),
    },
    viewSources: {
      backgroundColor: COLOR_SECONDARY,
      borderRadius: vw(2.3),
      marginTop: vw(14),
      padding: vw(4),
    },
    viewSourcesHeadline: {
      color: '#B0B0B1',
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: vw(4.5),
      lineHeight: vw(7),
    },
    viewSourcesText: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: vw(3.5),
      lineHeight: vw(5.5),
      textDecorationLine: 'underline',
    },
    viewSourcesButton: {
      marginTop: vw(2),
    },
    viewSourcesLastUpdated: {
      color: COLOR_PRIMARY,
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: vw(3.5),
      lineHeight: vw(5.5),
      marginTop: vw(2.5),
    },
  });

  const steps = [
    __('tips.coughing-sneezing.list.item-1'),
    __('tips.coughing-sneezing.list.item-2'),
    __('tips.coughing-sneezing.list.item-3'),
    __('tips.coughing-sneezing.list.item-4'),
    __('tips.coughing-sneezing.list.item-5'),
  ];

  const goBack = () => navigation.dispatch(CommonActions.goBack());

  return (
    <Layout backgroundColor={COLOR_SECONDARY}>
      <Header>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()} style={{ marginBottom: -vw(3), marginTop: -vw(3) }}>
            <UilArrowLeft size={vw(12)} color={'#000000'} />
          </TouchableOpacity>

          <Text style={styles.headerHeadline}>{__('tips-screen.header.headline')}</Text>
        </View>
      </Header>

      <ScrollView>
        <View style={styles.view}>
          <View style={styles.viewContent}>
            <Text style={styles.contentHeadline}>{__('tips.coughing-sneezing.headline')}</Text>
            <Text style={styles.contentText}>{__('tips.coughing-sneezing.text')}</Text>
          </View>

          <View style={{ ...styles.viewContent, ...styles.viewContentList }}>
            {steps.map((stepText, index) => (
              <View key={`tip-list-item-${index}`} style={styles.listItem}>
                <View style={styles.listItemNumber}>
                  <Text style={styles.listItemNumberText}>{index + 1}</Text>
                </View>

                <Text style={styles.listItemText}>{stepText}</Text>
              </View>
            ))}
          </View>

          <View style={styles.viewSources}>
            <Text style={styles.viewSourcesHeadline}>{__('tips.sources.headline')}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/A/Asylsuchende/Hygieneverhalten_62530100.pdf'
                ).catch(() => {})
              }
              style={styles.viewSourcesButton}>
              <Text style={styles.viewSourcesText}>www.bundesgesundheitsministerium.de</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/what-you-need-to-know-about-coronavirus-covid-19'
                ).catch(() => {})
              }
              style={styles.viewSourcesButton}>
              <Text style={styles.viewSourcesText}>www.health.gov.au</Text>
            </TouchableOpacity>
            <Text style={styles.viewSourcesLastUpdated}>
              {`${__('tips.sources.last-updated')} ${moment(1584489600000).format('L')}`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default withI18n(withViewportUnits(TipCoughingSneezing));
