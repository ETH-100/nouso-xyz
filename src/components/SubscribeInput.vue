<template>
    <div class="subscribe-form-container">
        <form v-if="!success" class="subscribe-form" @submit.prevent="onSubmit">
            <el-input v-model="email" name="email" type="email" :placeholder="$t('subscribe.placeholder')"
                :prefix-icon="Message" required size="large"
                class="subscribe-input pixel-button-4-white pixel-button-4" />
            <el-button type="primary" native-type="submit" size="large" :loading="loading"
                class="pixel-button-4 pixel-button-4-primary">
                {{ loading ? $t('subscribe.loading') : $t('subscribe.submit') }}
            </el-button>
        </form>

        <p v-if="success" class="subscribe-tip success">
            {{ $t('subscribe.success') }}
        </p>

        <p v-if="error" class="subscribe-tip error">
            {{ errorMessage || $t('subscribe.error') }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Message } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref(false)
const errorMessage = ref('')

const actionUrl =
    'https://app.loops.so/api/newsletter-form/cmdv5tc3u04om1l0ia2erc6ft'

const onSubmit = async () => {
    if (!email.value) return

    loading.value = true
    success.value = false
    error.value = false
    errorMessage.value = ''

    const formBody = new URLSearchParams()
    formBody.append('email', email.value)
    formBody.append('userGroup', '')
    formBody.append('mailingLists', '')

    try {
        const res = await fetch(actionUrl, {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        if (res.ok) {
            success.value = true
            email.value = ''
        } else {
            const data = await res.json()
            errorMessage.value = data.message || t('subscribe.error')
            error.value = true
        }
    } catch (err: any) {
        error.value = true
        errorMessage.value = err.message || t('subscribe.network_error')
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss">
@use 'sass:map';
@use '@/styles/element/index.scss' as *;

$--primary-pixel: linear-gradient(0deg, map.get($colors, 'primary', 'base') 100%, #fff 0);
$--white-pixel: linear-gradient(0deg, #fff 100%, #fff 0);
$--grey-pixel: linear-gradient(0deg, #f8f6f7 100%, #f8f6f7 0);

.el-input {
    padding: 5px;
}

.el-input__wrapper {
    border-radius: 30px !important;
    overflow: hidden;
}

.subscribe-form {
    width: 100%;
    display: flex;
    height: 60px;
    gap: 12px;
    max-width: 600px;
    margin: 0 auto;
}

.subscribe-alert {
    margin-top: 10px;
}

.subscribe-tip {
    font-size: 14px;
    line-height: 1.5;
    background: #e2bfff;
    width: 600px;
    margin: auto;
    padding: 30px;
    border-radius: 10px;

    &.success {
        color: #16a34a;
    }

    &.error {
        color: #dc2626;
    }
}

.pixel-button-4:hover {
    filter: drop-shadow(0 5px 15px #5366dd);
}

.pixel-button-4-primary {
    background: $--primary-pixel, $--primary-pixel, $--primary-pixel,
        $--primary-pixel;
}

.pixel-button-4-white {
    background: $--white-pixel, $--white-pixel, $--white-pixel, $--white-pixel;
}

.pixel-button-4 {
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: center 50%, center 50%, center 50%, center 50%;
    background-size: calc(100% - 12px) calc(100% - 20px),
        calc(100% - 24px) calc(100% - 8px), 100% calc(100% - 32px),
        calc(100% - 40px) 100%;
    border: none;
    min-height: 60px;
    filter: drop-shadow(0 5px 15px #a2adf3);
    min-width: 150px;
}
</style>
