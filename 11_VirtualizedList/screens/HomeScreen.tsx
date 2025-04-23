import React from 'react';
import { SafeAreaView, Text, VirtualizedList } from 'react-native';
import { LogItem } from '../components/LogItem';
import { generateLogs } from '../utils/generateLogs';
import { Log } from '../models/Log';

const LOGS: Log[] = generateLogs(1000);

const getItem      = (data: Log[], index: number) => data[index];
const getItemCount = (data: Log[]) => data.length;

interface Props {
  navigation: any;
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
      Tulip
    </Text>
    <VirtualizedList
      data={LOGS}
      initialNumToRender={6}
      renderItem={({ item }: { item: Log }) =>
        <LogItem
          item={item}
          onPress={() => navigation.push('Detail', { item })}
        />
      }
      keyExtractor={item => item.id}
      getItem={getItem}
      getItemCount={getItemCount}
      windowSize={4}
      maxToRenderPerBatch={6}
      updateCellsBatchingPeriod={50}
    />
  </SafeAreaView>
);
