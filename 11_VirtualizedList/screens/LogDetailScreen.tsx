import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Log } from '../models/Log';

interface Props {
  route: { params: { item: Log } };
}

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  const payload = decodeURIComponent(item.request.body.replace('payload=', ''));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        {item.service} @ {new Date(item.timestamp).toLocaleTimeString('de-DE')}
      </Text>

      <View style={styles.requestBox}>
        <Text style={styles.boxTitle}>Request</Text>
        <Text style={styles.line}>Path: {item.request.path}</Text>
        {item.request.headers.map((h, i) =>
          <Text key={i} style={styles.line}>{h.name}: {h.value}</Text>
        )}
        <Text style={[styles.line, styles.bodyText]}>{payload}</Text>
      </View>

      <View style={styles.responseBox}>
        <Text style={styles.boxTitle}>Response</Text>
        <Text style={styles.line}>Status: {item.response.status}</Text>
        {item.response.headers.map((h, i) =>
          <Text key={i} style={styles.line}>{h.name}: {h.value}</Text>
        )}
        <Text style={[styles.line, styles.bodyText]}>{item.response.body}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 12, backgroundColor: '#FFFFFF' },
  header:       { fontSize: 20, fontWeight: '600', marginBottom: 16, textAlign: 'center' },
  boxTitle:     { fontSize: 16, fontWeight: '500', marginBottom: 8 },
  requestBox:   { backgroundColor: '#E6FFEA', padding: 10, borderRadius: 6, marginBottom: 12 },
  responseBox:  { backgroundColor: '#FFE6E6', padding: 10, borderRadius: 6, marginBottom: 12 },
  line:         { fontFamily: 'Courier', fontSize: 13, color: '#333333', marginBottom: 2 },
  bodyText:     { marginTop: 6, fontStyle: 'italic' }
});

