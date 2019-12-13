import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CourseCard } from '.';
import { useHistory } from 'react-router-dom';
import { Course } from '../services/apiService';
interface Props {
    name: string;
    id: string;
    courses: Course[];
}
const PersonaRecommendation: React.FC<Props> = ({ name, id, courses }) => {
    const history = useHistory();
    return (
        <Grid item>
            <Grid container direction="row" justify="center" alignItems="center">
                <h2>{name}</h2>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <Button
                        color="primary"
                        onClick={() => history.push('/generalRecommending/' + id)}
                    >
                        General Model
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        onClick={() => history.push('/overfittingRecommending/' + id)}
                    >
                        Overfitting
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        onClick={() => history.push('/taxonomyRecommending/' + id)}
                    >
                        Taxonomy
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        onClick={() => history.push('/categoryRecommending/' + id)}
                    >
                        Categories
                    </Button>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                {courses.map(({ provider, name, description, id }) => (
                    <Grid item xs={2} key={id}>
                        <CourseCard
                            provider={provider}
                            title={name}
                            courseId={id}
                            description={description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default PersonaRecommendation;
