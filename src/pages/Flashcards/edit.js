import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../../containers/Layout';
import Grid from '@material-ui/core/Grid';
import CreateFlashcards from '../../containers/CreateFlashcards';
import PostTips from '../../components/PostTips';
import { useParams } from 'react-router';
import withRoot from '../../withRoot';
import { useSelector } from 'react-redux';
import { isApiCalling } from '../../utils/helpers';
import { campaignActions } from '../../constants/action-types';
import LoadingSpin from '../../components/LoadingSpin';
import FlashcardsEdit from '../../containers/FlashcardsEdit';

const FlashcardsEditPage = () => {
  const { flashcardId } = useParams();
  const isNewVersion = useSelector(
    (state) => state.campaign.newFlashcardsExperience
  );
  const isLoading = useSelector(
    isApiCalling(campaignActions.GET_FLASHCARDS_CAMPAIGN)
  );

  const renderBody = () => {
    if (isLoading) {
      return <LoadingSpin />;
    }

    if (!isNewVersion) {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} md={9}>
            <CreateFlashcards flashcardId={flashcardId} />
          </Grid>
          <Grid item xs={12} sm={0} md={3}>
            <PostTips type="flashcards" />
          </Grid>
        </Grid>
      );
    }

    return <FlashcardsEdit flashcardId={flashcardId} />;
  };

  return (
    <main>
      <CssBaseline />
      <Layout>{renderBody()}</Layout>
    </main>
  );
};

export default withRoot(FlashcardsEditPage);
