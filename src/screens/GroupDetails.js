import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function GroupDetails({ route }) {
  const { group } = route.params;
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (itemName.trim()) {
      setItems([...items, { id: Date.now().toString(), name: itemName, completed: false }]);
      setItemName('');
    }
  };

  const markComplete = (rowKey) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === rowKey ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{group.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Add Item" onPress={addItem} style={styles.addBtn} />
      {/* TODO Swipe item return to the start  */}
      <SwipeListView
        style={styles.swipeList}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, item.completed && styles.completed]}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        renderHiddenItem={() => <View style={styles.rowBack} />}
        leftOpenValue={75}
        onRowOpen={(rowKey) => markComplete(rowKey)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  completed: { backgroundColor: '#e0ffe0' }, // Light green for completed items
  itemText: { fontSize: 16 },
  rowBack: { flex: 1, backgroundColor: 'transparent' }, // Transparent background
});
