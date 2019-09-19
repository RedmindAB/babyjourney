import { OfferModel } from '../../components/common/Offer/Offer'
import { babyBjorn, tableChair, babyCarChair, babyWagon } from '../../assets/images'
import i18n, { lang } from '../../translations'

const mockOffers: OfferModel[] = [
  {
    image: babyBjorn,
    title: i18n.t(lang.offers.offerList.babyBjorn.title),
    body: i18n.t(lang.offers.offerList.babyBjorn.body),
    category: i18n.t(lang.offers.offerList.babyBjorn.category)
  },
  {
    image: tableChair,
    title: i18n.t(lang.offers.offerList.tableChair.title),
    body: i18n.t(lang.offers.offerList.tableChair.body),
    category: i18n.t(lang.offers.offerList.tableChair.category)
  },
  {
    image: babyCarChair,
    title: i18n.t(lang.offers.offerList.carChair.title),
    body: i18n.t(lang.offers.offerList.carChair.body),
    category: i18n.t(lang.offers.offerList.carChair.category)
  },
  {
    image: babyWagon,
    title: i18n.t(lang.offers.offerList.babyWagon.title),
    body: i18n.t(lang.offers.offerList.babyWagon.body),
    category: i18n.t(lang.offers.offerList.babyWagon.category)
  }
]
export default mockOffers
