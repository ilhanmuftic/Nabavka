import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function GroupList({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');

  const addGroup = () => {
    if (groupName.trim()) {
      setGroups([...groups, { id: Date.now().toString(), name: groupName }]);
      setGroupName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Groups</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter group name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <Button title="Add Group" onPress={addGroup} />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.groupItem}
            onPress={() => navigation.navigate('GroupDetails', { group: item })}
          >
            <Text style={styles.groupText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  groupItem: { padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 5 },
  groupText: { fontSize: 18 },
});
