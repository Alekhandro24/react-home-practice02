import { fetchDogByBreed } from 'components/Dog/api';
import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { BreedSelect } from 'components/Dog/BreedSelect';
import { Layout } from 'components/Dog/Layout';
import { Dog } from 'components/Dog/Dog';

import { DogSkeleton } from 'components/Dog/DogSkeleton';

export class App extends Component {
  state = {
    dog: null,
    error: null,
    isLoading: false,
    // selectedBreed: null, нам не треба він, так як у нас 1 запит і ми можемо зберігати запит в this.selectedBreed
  };

  selectBreed = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      //   this.setState({
      //     error: 'This dog is on vacation) Try again',
      //   });
      toast.error('This dog is on vacation) Try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { error, dog, isLoading } = this.state;
    return (
      <Layout>
        <BreedSelect onSelect={this.selectBreed} />
        {dog && !isLoading && <Dog dog={dog} />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isLoading && <DogSkeleton />}
        <Toaster position="bottom-right" />
      </Layout>
    );
  }
}
