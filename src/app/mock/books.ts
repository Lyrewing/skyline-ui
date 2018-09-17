import { Book, Category } from "../model/Book";

export let books: Book[] = [
    {Id:1, Name: "斗罗大陆", Author: "唐家三少", Summary: "《斗罗大陆》是一部穿越玄幻类型的网络小说，小说签约授权首发连载于起点中文网。小说已经完本，作者是唐家三少。堪称唐家三少最有影响力和代表性的小说之一。", Cover: "/assets/img/douluodalu.jpg", BookCategory: Category.Story },
    {Id:2, Name: "火影忍者", Author: "NARUTO -ナルト-", Summary: "电视动画《火影忍者》改编自日本漫画家岸本齐史的同名漫画，2002年10月3日在东京电视台系列全6局、岐阜放送首播，共220话；第二季《火影忍者疾风传》自2007年2月开始播出，共500话；累计全720话", Cover: "/assets/img/huoyingrenzhe.jpg", BookCategory: Category.TV },
    {Id:3, Name: "武庚纪", Author: "玄机科技", Summary: "网络动画《武庚纪》系列是由沈乐平执导，杭州玄机科技信息技术有限公司根据香港漫画家郑健和的经典封神题材漫画（大陆简体字版更名为“武庚纪”连载于掌阅、腾讯动漫）改编创作的3D玄幻动画系列。该系列以“超强脑洞封神演义”为定位，力图为观众们演绎一出封神题材3D魔幻史诗巨制。", Cover: "/assets/img/wugengji.jpg", BookCategory: Category.TV }
]