import { Book, Category } from "../model/Book";
import { Payment, PayChannel, PayStatus } from "../model/Payment";

//小说数据
export let books: Book[] = [
    {Id:1, Name: "斗罗大陆", Author: "唐家三少", Summary: "《斗罗大陆》是一部穿越玄幻类型的网络小说，小说签约授权首发连载于起点中文网。小说已经完本，作者是唐家三少。堪称唐家三少最有影响力和代表性的小说之一。", Cover: "/assets/img/douluodalu.jpg", BookCategory: Category.Story },
    {Id:2, Name: "火影忍者", Author: "NARUTO -ナルト-", Summary: "电视动画《火影忍者》改编自日本漫画家岸本齐史的同名漫画，2002年10月3日在东京电视台系列全6局、岐阜放送首播，共220话；第二季《火影忍者疾风传》自2007年2月开始播出，共500话；累计全720话", Cover: "/assets/img/huoyingrenzhe.jpg", BookCategory: Category.TV },
    {Id:3, Name: "武庚纪", Author: "玄机科技", Summary: "网络动画《武庚纪》系列是由沈乐平执导，杭州玄机科技信息技术有限公司根据香港漫画家郑健和的经典封神题材漫画（大陆简体字版更名为“武庚纪”连载于掌阅、腾讯动漫）改编创作的3D玄幻动画系列。该系列以“超强脑洞封神演义”为定位，力图为观众们演绎一出封神题材3D魔幻史诗巨制。", Cover: "/assets/img/wugengji.jpg", BookCategory: Category.TV }
]


//支付交易数据
export let payments:Payment[]=[
    {OrderNO:"BIO18101822400401",Amount:10.0,PaymentNO:"2018101622001499721102666731",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:10.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101822400361",Amount:20.0,PaymentNO:"2018101622001475910533781857",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101822400181",Amount:29.3,PaymentNO:"2018101622001431650526059329",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:29.3,Status:PayStatus.Success},
    {OrderNO:"BIO18101722399481",Amount:20.4,PaymentNO:"2018101622001437280502243907",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101722399461",Amount:26.0,PaymentNO:"2018101622001437280598872313",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:26.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101722399421",Amount:26.0,PaymentNO:"2018101522001437280598516803",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622399121",Amount:29.0,PaymentNO:"2018101522001477750519646744",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622398361",Amount:29.0,PaymentNO:"2018101522001499721102324052",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622398181",Amount:25.0,PaymentNO:"2018101522001499721102250463",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622397441",Amount:23.0,PaymentNO:"2018101522001431650521912509",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622396941",Amount:22.0,PaymentNO:"2018101222001499720520151929",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101623179541",Amount:23.0,PaymentNO:"2018101222001499720519715537",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622396681",Amount:24.0,PaymentNO:"2018101222001437280580874050",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101622396661",Amount:24.0,PaymentNO:"2018101222001437280578575421",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101521575141",Amount:26.0,PaymentNO:"2018101222001477750503328351",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101521574701",Amount:29.0,PaymentNO:"2018101122001453940528004242",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101521574581",Amount:27.0,PaymentNO:"2018101122001437280576168006",Channel:PayChannel.WeChat,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101521574301",Amount:28.0,PaymentNO:"2018101122001431650500094863",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
    {OrderNO:"BIO18101221573281",Amount:26.0,PaymentNO:"2018101122001419760598602774",Channel:PayChannel.AliPay,StartTime:"10/18/2018 11:33:57 AM",PaymentAmount:20.0,Status:PayStatus.Success},
]


