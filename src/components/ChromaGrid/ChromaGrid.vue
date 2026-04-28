<script setup lang="ts">
import { onMounted, computed, useTemplateRef, shallowRef, reactive } from 'vue';
import gsap from 'gsap';

interface CardItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  location?: string;
}

interface GridMotionProps {
  items?: CardItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const props = withDefaults(defineProps<GridMotionProps>(), {
  items: () => [],
  className: '',
  radius: 300,
  damping: 0.45,
  fadeOut: 0.6,
  ease: 'power3.out',
});

const rootRef = useTemplateRef<HTMLElement>('rootRef');
const fadeRef = useTemplateRef<HTMLElement>('fadeRef');
const setX = shallowRef<(value: number | string) => void>();
const setY = shallowRef<(value: number | string) => void>();
const pos = reactive({ x: 0, y: 0 });

const demo: CardItem[] = [
  {
    image: 'https://i.pravatar.cc/300?img=8',
    title: 'Alex Rivera',
    subtitle: 'Full Stack Developer',
    handle: '@alexrivera',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg,#4F46E5,#000)',
    url: 'https://github.com/',
  },
  {
    image: 'https://i.pravatar.cc/300?img=11',
    title: 'Jordan Chen',
    subtitle: 'DevOps Engineer',
    handle: '@jordanchen',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg,#10B981,#000)',
    url: 'https://linkedin.com/in/',
  },
  {
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'Morgan Blake',
    subtitle: 'UI/UX Designer',
    handle: '@morganblake',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg,#F59E0B,#000)',
    url: 'https://dribbble.com/',
  },
  {
    image: 'https://i.pravatar.cc/300?img=16',
    title: 'Casey Park',
    subtitle: 'Data Scientist',
    handle: '@caseypark',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg,#EF4444,#000)',
    url: 'https://kaggle.com/',
  },
  {
    image: 'https://i.pravatar.cc/300?img=25',
    title: 'Sam Kim',
    subtitle: 'Mobile Developer',
    handle: '@thesamkim',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
    url: 'https://github.com/',
  },
  {
    image: 'https://i.pravatar.cc/300?img=60',
    title: 'Tyler Rodriguez',
    subtitle: 'Cloud Architect',
    handle: '@tylerrod',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(135deg,#06B6D4,#000)',
    url: 'https://aws.amazon.com/',
  },
];

const data = computed(() => (props.items.length ? props.items : demo));

onMounted(() => {
  const el = rootRef.value;
  if (!el) return;

  setX.value = gsap.quickSetter(el, '--x', 'px') as (value: number | string) => void;
  setY.value = gsap.quickSetter(el, '--y', 'px') as (value: number | string) => void;
  const { width, height } = el.getBoundingClientRect();
  pos.x = width / 2;
  pos.y = height / 2;
  setX.value?.(pos.x);
  setY.value?.(pos.y);
});

const moveTo = (x: number, y: number) => {
  gsap.to(pos, {
    x,
    y,
    duration: props.damping,
    ease: props.ease,
    onUpdate: () => {
      setX.value?.(pos.x);
      setY.value?.(pos.y);
    },
    overwrite: true,
  });
};

const handleMove = (e: PointerEvent) => {
  const r = rootRef.value?.getBoundingClientRect();
  if (!r) return;
  moveTo(e.clientX - r.left, e.clientY - r.top);
  if (fadeRef.value) {
    gsap.to(fadeRef.value, { opacity: 0, duration: 0.25, overwrite: true });
  }
};

const handleLeave = () => {
  if (fadeRef.value) {
    gsap.to(fadeRef.value, {
      opacity: 1,
      duration: props.fadeOut,
      overwrite: true,
    });
  }
};

const handleCardClick = (url?: string) => {
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
};

const handleCardMove = (e: MouseEvent) => {
  const c = e.currentTarget as HTMLElement;
  const rect = c.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  c.style.setProperty('--mouse-x', `${x}px`);
  c.style.setProperty('--mouse-y', `${y}px`);
};

const spotlightStyle = {
  backdropFilter: 'grayscale(1) brightness(0.78)',
  WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
  background: 'rgba(0,0,0,0.001)',
  maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
  WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
};

const fadeStyle = {
  ...spotlightStyle,
  maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
  WebkitMaskImage:
    'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
  opacity: 1,
};
</script>

<template>
  <div
    ref="rootRef"
    class="relative w-full h-full flex flex-wrap justify-center items-start gap-6"
    :style="{
      '--r': `${props.radius}px`,
      '--x': '50%',
      '--y': '50%',
    }"
    @pointermove="handleMove"
    @pointerleave="handleLeave"
  >
    <article
      v-for="(c, i) in data"
      :key="i"
      class="group relative flex flex-col w-full sm:w-[340px] lg:w-[360px] h-[380px] rounded-[24px] overflow-hidden border border-white/5 hover:border-[var(--card-border)] bg-[#111] transition-all duration-300"
      :style="{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--card-border': c.borderColor || 'transparent',
        '--spotlight-color': 'rgba(255,255,255,0.2)',
        background: c.gradient,
        cursor: c.url ? 'pointer' : 'default',
      }"
      @mousemove="handleCardMove"
      @click="() => handleCardClick(c.url)"
    >
      <div
        class="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
        :style="{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
        }"
      />

      <div class="relative z-10 w-full h-[230px] p-4 box-border">
        <div class="w-full h-full rounded-[16px] overflow-hidden bg-black/40 border border-white/5 relative">
          <img :src="c.image" :alt="c.title" loading="lazy" class="w-full h-full object-cover block" />
        </div>
      </div>

      <footer class="relative z-10 px-5 pb-6 pt-2 text-white font-sans flex flex-col text-left">
        <h3 class="m-0 text-[1.1rem] font-bold tracking-wide">{{ c.title }}</h3>
        <p class="m-0 mt-2 text-[0.9rem] text-gray-400 font-light leading-relaxed line-clamp-2">{{ c.subtitle }}</p>
      </footer>
    </article>

    <div class="absolute inset-0 pointer-events-none z-30" :style="spotlightStyle" />
    <div ref="fadeRef" class="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40" :style="fadeStyle" />
  </div>
</template>
