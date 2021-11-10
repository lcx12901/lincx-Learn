import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
// 组件自动引入
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// SVG雪碧图
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Components({
			dts: true, // enabled by default if `typescript` is installed
			resolvers: [AntDesignVueResolver()]
		}),
		viteSvgIcons({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]'
		}),
		vue()
	],
	resolve: {
		alias: {
			'@': resolve('./src')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	}
});
