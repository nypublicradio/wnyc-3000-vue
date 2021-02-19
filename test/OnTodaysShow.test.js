import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ImageWithCaption from 'nypr-design-system-vue/src/components/ImageWithCaption'
import SegmentList from 'nypr-design-system-vue/src/components/SegmentList'
import SegmentListItem from 'nypr-design-system-vue/src/components/SegmentListItem'
import ShareTools from 'nypr-design-system-vue/src/components/ShareTools'
import ShareToolsItem from 'nypr-design-system-vue/src/components/ShareToolsItem'
import VButton from 'nypr-design-system-vue/src/components/VButton'
import VSpacer from 'nypr-design-system-vue/src/components/VSpacer'
import VPerson from 'nypr-design-system-vue/src/components/VPerson'
import OnTodaysShow from '../components/OnTodaysShow'
import { state } from './fake-data'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('OnTodaysShow', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          namespaced: true
        }
      }
    })
  })

  const stubs = {
    ImageWithCaption,
    SegmentList,
    SegmentListItem,
    ShareTools,
    ShareToolsItem,
    VButton,
    VSpacer,
    VPerson
  }

  it('renders the title', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.on-todays-show-title')
    expect(div.text()).toContain(state().selectedStream.title)
  })

  it('renders the headline', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.on-todays-show-headline')
    expect(div.text()).toContain(state().selectedStream.onTodaysShowHeadline)
  })

  it('renders the headlineLink', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.on-todays-show-headline a')
    expect(div.attributes('href')).toBe(state().selectedStream.onTodaysShowHeadlineLink)
  })

  it('renders segments', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.segment-list-item')
    expect(div.text()).toContain(state().selectedStream.onTodaysShowSegments[0].title)
    expect(div.attributes('href')).toBe(state().selectedStream.onTodaysShowSegments[0].url)
  })

  it('renders the image with caption', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.image-with-caption img')
    expect(div.attributes('src')).toContain(state().selectedStream.onTodaysShowImage)
  })

  it('renders hosts', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.on-todays-show-person-list')
    expect(div.text()).toContain(state().selectedStream.onTodaysShowHosts[0]['first-name'])
    expect(div.text()).toContain(state().selectedStream.onTodaysShowHosts[0]['last-name'])
  })

  it('renders social stuff', () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    const div = wrapper.find('.c-share-tools__link')
    expect(div.attributes('href')).toContain(state().selectedStream.onTodaysShowSocial.twitter)
  })

  it('showMoreSegments works', async () => {
    const wrapper = mount(OnTodaysShow, {
      stubs,
      store,
      localVue,
      computed: {
        headline () { return state().selectedStream.onTodaysShowHeadline },
        headlineLink () { return state().selectedStream.onTodaysShowHeadlineLink },
        episodeLink () { return state().selectedStream.episodeLink },
        hosts () { return state().selectedStream.onTodaysShowHosts },
        image () { return state().selectedStream.onTodaysShowImage },
        imageAltText () { return state().selectedStream.onTodaysShowImageAltText },
        imageCaption () { return state().selectedStream.onTodaysShowImageCaption },
        imageCredits () { return state().selectedStream.onTodaysShowImageCredits },
        imageCreditsUrl () { return state().selectedStream.onTodaysShowImageCreditsUrl },
        segments () { return state().selectedStream.onTodaysShowSegments },
        social () { return state().selectedStream.onTodaysShowSocial },
        title () { return state().selectedStream.title }
      }
    })
    expect(wrapper.vm.segmentsToShow).toBe(6)
    const div = wrapper.find('.segment-list-button')
    div.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.segmentsToShow).toBe(state().selectedStream.onTodaysShowSegments.length)
  })
})
