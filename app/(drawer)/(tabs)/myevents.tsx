import { StyleSheet, Image, Platform } from 'react-native';

import TopBar from '@/components/TopBar';
import YouHaveUnread from "@/components/YouHaveUnread";

import {ScrollView} from "react-native";

import { Button } from 'react-native';
import { Link } from 'expo-router';

import Event from "@/components/Event";

import { useNavigation } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
    const navigation = useNavigation();

  // @ts-ignore
    // @ts-ignore
    return (
      <ThemedView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: '#121212'
      }}>
        <TopBar
            text={'Мої події'}
            backButton={false}
            buttons={true}
            notifications={false}
            blur={true}
        />

          <ThemedView style={{
              marginTop: 150,
              backgroundColor: '#121212'
          }}>


              <ScrollView style={{
                  paddingHorizontal: 24,
              }}>
                  <YouHaveUnread from={'Допомога у притулку", "Благодійний концерт'} amount={3}></YouHaveUnread>
                  <Event
                      eventName={'Допомога в притулку'}
                      date={'3.02'}
                      linkToEvent={'1'}
                      status={'active'}
                      type={'a'}
                      address={'Університетська 1'}
                  >
                  </Event>
                  <Event
                      eventName={'Благодійний концерт'}
                      date={'5.02'}
                      linkToEvent={'2'}
                      status={'soon'}
                      type={'a'}
                      address={'театр Опери та балету'}>
                  </Event>

              </ScrollView>

              {/*<Link style={{*/}
              {/*    color: 'white',*/}
              {/*}} href="/Event/1">View first event details</Link>*/}
              {/*<Link style={{*/}
              {/*    color: 'white',*/}
              {/*}} href="/Event/2">View second event details</Link>*/}
          </ThemedView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
