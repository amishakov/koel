import { expect, it } from 'vitest'
import UnitTestCase from '@/__tests__/UnitTestCase'
import { commonStore } from '@/stores/commonStore'
import Component from './LastfmIntegration.vue'

new class extends UnitTestCase {
  protected test () {
    it.each<[boolean, boolean]>([[false, false], [false, true], [true, false], [true, true]])(
      'renders proper content with Last.fm integration status %s, current user admin status %s',
      (useLastfm, isAdmin) => {
        commonStore.state.uses_last_fm = useLastfm

        if (isAdmin) {
          this.beAdmin()
        } else {
          this.be()
        }

        expect(this.render(Component).html()).toMatchSnapshot()
      },
    )
  }
}
