import {
    Container,
    Typography,
    Card
} from '@mui/material';
import React from 'react';

interface ContentViewerAttrs {

}

const ContentViewer: React.FC<ContentViewerAttrs> = () => {
    return(
        <>
        <Container>
            <Card>
                <Typography>Teste</Typography>
            </Card>
        </Container>
        </>
    )
}

export default ContentViewer;
