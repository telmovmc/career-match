 <template>
    <div class="dev-colors">
        <div v-for="color in colors" :key="color">
            <h3>{{ color.charAt(0).toUpperCase() + color.slice(1) }}</h3>
            <div class="color-pallete">
                <div
                    v-for="tone in tones"
                    :key="tone.suffix"
                    :class="`${color}${tone.suffix}`">
                    {{ tone.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const colors = ['primary', 'danger', 'warning', 'success', 'info']
const tones = [
    { suffix: '-lighter', label: 'Lighter' },
    { suffix: '-light', label: 'Light' },
    { suffix: '', label: 'Default' },
    { suffix: '-dark', label: 'Dark' },
    { suffix: '-darker', label: 'Darker' },
]
</script>