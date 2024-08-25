<template>
	<div class="container">
		<Category title="美食" :listData="foods">
			<img slot="center" src="https://ts1.cn.mm.bing.net/th/id/R-C.0da29ad2b92e436ad783767bebe985af?rik=pOPUvoL60frv6g&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50021%2f5742.jpg_wh1200.jpg&ehk=6jpTK%2fZCy6E9u5nNY%2fSLxFJY9uHq%2bWOYYtjrifR6RlQ%3d&risl=&pid=ImgRaw&r=0" alt="">
			<div slot="footer" class="foot">
				<a href="#">外卖</a>
				<a href="#">更多</a>
			</div>
		</Category>

		<Category title="游戏" :listData="games">
		<ul slot="center">
			<li v-for="(item,index) in games" :key="index">{{item}}</li>
		</ul>
		<div slot="footer" class="foot">
			<a href="#">网络游戏</a>
			<a href="#">单机游戏</a>
		</div>
		</Category>

		<Category title="电影" :listData="files">
			<Video slot="center" controls  src="https://cn-zjjh-ct-04-07.bilivideo.com/upgcxcode/93/40/1631804093/1631804093-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1724577655&gen=playurlv2&os=bcache&oi=2043500563&trid=0000ab781b255dcf45f889b446f5ea272946h&mid=0&platform=html5&og=cos&upsig=fe79210c03b2a0f16558b3236c7f86ed&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=6592&bvc=vod&nettype=0&f=h_0_0&bw=58791&logo=80000000"></Video>
			
			<!-- 只有template可以这么写 -->
			<template v-slot:footer >
				<div class="foot">
					<a href="#">热门</a>
					<a href="#">经典</a>
					<a href="#">科幻</a>
				</div>
				<h4>欢迎来看</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		data() {
			return {
				foods:['火锅','水饺','大盘鸡','烩面'],
				games:['穿越火线','英雄联盟','原神','星穹铁道'],
				files:['《教父》','《大话西游》','《功夫》','《西游记》'],
			}
		},
		components:{
			Category,
		}
	}
</script>

<style>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>