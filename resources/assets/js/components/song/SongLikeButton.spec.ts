import { screen } from '@testing-library/vue'
import { expect, it } from 'vitest'
import UnitTestCase from '@/__tests__/UnitTestCase'
import factory from '@/__tests__/factory'
import { favoriteStore } from '@/stores/favoriteStore'
import Component from './SongLikeButton.vue'

new class extends UnitTestCase {
  protected test () {
    it.each<[string, boolean]>([['Unlike', true], ['Like', false]])('%s', async (name, liked) => {
      const mock = this.mock(favoriteStore, 'toggleOne')

      const playable = factory('song', {
        liked,
        title: 'Foo',
        artist_name: 'Bar',
      })

      this.render(Component, {
        props: {
          playable,
        },
      })

      await this.user.click(screen.getByRole('button', { name }))

      expect(mock).toHaveBeenCalledWith(playable)
    })
  }
}
