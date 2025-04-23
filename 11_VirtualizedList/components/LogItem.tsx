import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Log } from '../models/Log';

interface Props {
  item: Log;
  onPress: () => void;
}

export const LogItem: React.FC<Props> = ({ item, onPress }) => {
  const time = new Date(item.timestamp).toLocaleTimeString('de-DE', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    fractionalSecondDigits: 3
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.logItem}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>{item.service}:{time}</Text>
          <Text style={styles.headerRight}>{item.duration}</Text>
        </View>
        <View style={styles.tags}>
          {item.tags.map(tag => (
            <View key={tag} style={[styles.tag, { backgroundColor: tagColors[tag] }]}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const tagColors: Record<string,string> = {
  FLAG_IN:  '#FFF44F',
  FLAG_OUT: '#99FC4E',
  RESEARCH: '#00CED1',
  ENEMY:    '#FF8C00',
  'SQL Injection':      '#FF6347',
  'Path Traversal':     '#FF6347',
  'XSS':                '#FF6347',
  'Local File Include': '#FF6347',
  'Cmd Injection':      '#FF6347'
};

const styles = StyleSheet.create({
  logItem:     { backgroundColor: '#F3F4F6', margin: 6, padding: 10, borderRadius: 8 },
  header:      { flexDirection: 'row', justifyContent: 'space-between' },
  headerLeft:  { fontFamily: 'Courier', fontSize: 13, color: '#545455' },
  headerRight: { fontFamily: 'Courier', fontSize: 13, color: '#545455' },
  tags:        { flexDirection: 'row', marginTop: 6 },
  tag:         { paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4, marginRight: 6 },
  tagText:     { fontFamily: 'Courier', fontSize: 12, color: '#1A1A1A' }
});

