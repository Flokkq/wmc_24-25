import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { ITodoElement } from "../models/ITodoElement";
import { Importance } from "../models/Importance";
import { ICategory } from "../models/ICategory";

interface AddDialogProps {
    open: boolean;
    onClose: () => void;
    onAddTodo: (todo: ITodoElement) => void;
    categories: ICategory[]; // Add categories prop
}

const AddDialog: React.FC<AddDialogProps> = ({ open, onClose, onAddTodo, categories }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState<ICategory | null>(null);
    const [importance, setImportance] = useState<Importance>(Importance.IRRELEVANT);

    const handleAdd = () => {
        if (category) {
            const newTodo: ITodoElement = {
                id: Date.now(),
                title,
                description,
                dueDate,
                catId: category.id,
                createDate: new Date().toISOString(),
                isDone: false,
                category,
                importance,
            };
            onAddTodo(newTodo);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={{ backgroundColor: '#fff', color: '#333' }}>Add Reminder</DialogTitle>
            <DialogContent style={{ backgroundColor: '#fff' }}>
                <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                    multiline
                    rows={4}
                />
                <TextField
                    label="Due"
                    fullWidth
                    variant="outlined"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    margin="normal"
                    helperText="dd.mm.yyyy"
                />
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category ? category.id : ''}
                        onChange={(e) => {
                            const selectedCategory = categories.find(cat => cat.id === e.target.value);
                            setCategory(selectedCategory || null);
                        }}
                        label="Category"
                    >
                        {categories.map(cat => (
                            <MenuItem key={cat.id} value={cat.id}>{cat.categoryName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel>Importance</InputLabel>
                    <Select
                        value={importance}
                        onChange={(e) => setImportance(e.target.value as Importance)}
                        label="Importance"
                    >
                        <MenuItem value={Importance.IRRELEVANT}>Irrelevant</MenuItem>
                        <MenuItem value={Importance.UNIMPORTANT}>Unimportant</MenuItem>
                        <MenuItem value={Importance.IMPORTANT}>Important</MenuItem>
                        <MenuItem value={Importance.URGENT}>Urgent</MenuItem>
                        <MenuItem value={Importance.CRITICAL}>Critical</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions style={{ backgroundColor: '#fff' }}>
                <Button
                    variant="outlined"
                    onClick={onClose}
                    style={{
                        borderColor: '#000',
                        color: '#000',
                        backgroundColor: '#fff',
                    }}
                >
                    Discard
                </Button>
                <Button
                    variant="contained"
                    onClick={handleAdd}
                    style={{
                        color: '#fff',
                        backgroundColor: '#000',
                        border: 'none',
                    }}
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddDialog;