import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const dummyNegotiations = [
    { id: 'a', company: 'A社（製造業・売上50億円）', lastContact: '2025-02-20' },
    { id: 'b', company: 'B社（IT業・売上100億円）', lastContact: '2025-02-18' },
];

function NegotiationList() {
    const navigate = useNavigate();

    const handleListItemClick = (id) => {
        navigate(`/negotiations/${id}`);
    };

    return (
        <Container>
            <Typography variant="h5" sx={{ mt: 4 }}>商談リスト</Typography>
            <List>
                {dummyNegotiations.map((item) => (
                    <React.Fragment key={item.id}>
                        <ListItem button onClick={() => handleListItemClick(item.id)}>
                            <ListItemText primary={item.company} secondary={`最終商談日: ${item.lastContact}`} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Container>
    );
}

export default NegotiationList;
