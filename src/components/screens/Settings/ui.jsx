import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLOR_SECONDARY } from '../../../constants';
import Layout from '../../widgets/Layout';
import { HeaderBack } from '../../widgets/Header';
import Toggle from '../../widgets/Toggle';

const Settings = ({
  notificationDiaryEnabled,
  notificationDisinfectSmartphoneEnabled,
  notificationWashingHandsOption1Enabled,
  notificationWashingHandsOption2Enabled,
  disableNotificationDiary,
  disableNotificationDisinfectSmartphone,
  disableNotificationWashingHands,
  enableNotificationDiary,
  enableNotificationDisinfectSmartphone,
  enableNotificationWashingHandsOption1,
  enableNotificationWashingHandsOption2,
  navigation,
  vw,
  getFontFamilyBold,
  getFontFamilyRegular,
  isRTL,
  __,
}) => {
  // noinspection JSUnresolvedFunction
  const styles = StyleSheet.create({
    contentText: {
      fontFamily: getFontFamilyRegular(),
      fontSize: vw(4.5),
      lineHeight: vw(7),
    },
    contentTextHeadline: {
      fontFamily: getFontFamilyBold(),
      fontSize: vw(5.1),
      lineHeight: vw(7),
      marginBottom: vw(1),
      paddingLeft: vw(2),
      paddingRight: vw(2),
      textTransform: 'lowercase',
    },
    headline: {
      fontFamily: getFontFamilyBold(),
      fontSize: vw(7),
      marginBottom: vw(4),
      paddingLeft: vw(2),
      paddingRight: vw(2),
      textTransform: 'lowercase',
    },
    setting: {
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
    settingLabel: {
      fontFamily: getFontFamilyRegular(),
      fontSize: vw(4.2),
      width: '85%',
    },
    settingToggle: {
      marginBottom: -vw(2.5),
      marginTop: -vw(2.5),
    },
    view: {
      backgroundColor: '#ffffff',
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
    viewContent: {
      padding: vw(2.5),
    },
    viewSetting: {
      marginBottom: vw(8),
      width: '100%',
    },
  });

  const Setting = ({ active, label, onPress }) => (
    <View style={styles.setting}>
      <Text style={styles.settingLabel}>{label}</Text>
      <Toggle active={active} isRTL={isRTL} onPress={() => onPress()} style={styles.settingToggle} />
    </View>
  );

  return (
    <Layout backgroundColor={COLOR_SECONDARY}>
      <HeaderBack headline={__('settings-screen.header.headline')} navigation={navigation} />

      <View style={styles.view}>
        <ScrollView>
          <View style={styles.viewContent}>
            <Text style={styles.headline}>{__('settings-screen.notifications.headline')}</Text>

            <View style={styles.viewSetting}>
              <Text style={styles.contentTextHeadline}>
                {__('settings-screen.notifications.washing-hands.headline')}
              </Text>
              <Setting
                active={notificationWashingHandsOption1Enabled}
                label={__('settings-screen.notifications.washing-hands.option-1.label')}
                onPress={() =>
                  notificationWashingHandsOption1Enabled
                    ? disableNotificationWashingHands(__)
                    : enableNotificationWashingHandsOption1(__)
                }
              />
              <Setting
                active={notificationWashingHandsOption2Enabled}
                label={__('settings-screen.notifications.washing-hands.option-2.label')}
                onPress={() =>
                  notificationWashingHandsOption2Enabled
                    ? disableNotificationWashingHands(__)
                    : enableNotificationWashingHandsOption2(__)
                }
              />
            </View>

            <View style={styles.viewSetting}>
              <Text style={styles.contentTextHeadline}>
                {__('settings-screen.notifications.disinfect-smartphone.headline')}
              </Text>
              <Setting
                active={notificationDisinfectSmartphoneEnabled}
                label={__('settings-screen.notifications.disinfect-smartphone.option.label')}
                onPress={() =>
                  notificationDisinfectSmartphoneEnabled
                    ? disableNotificationDisinfectSmartphone(__)
                    : enableNotificationDisinfectSmartphone(__)
                }
              />
            </View>

            <View style={styles.viewSetting}>
              <Text style={styles.contentTextHeadline}>{__('settings-screen.notifications.diary.headline')}</Text>
              <Setting
                active={notificationDiaryEnabled}
                label={__('settings-screen.notifications.diary.option.label')}
                onPress={() => (notificationDiaryEnabled ? disableNotificationDiary(__) : enableNotificationDiary(__))}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Settings;
